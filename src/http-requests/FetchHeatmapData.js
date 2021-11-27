import React, { useState, useEffect } from "react";
import { TailSpin } from "../components/loading-spinners/TailSpin";
import ErrorMessage from "../components/error-msg/ErrorMessage";
import RedditDataList from "../components/heatmap/RedditDataList";
import HeatmapTitle from "../components/heatmap/HeatmapTitle";

const FetchHeatmap = (props) => {
  const [redditSubmissions, setRedditSubmissions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // input validation:
  // NOTE: This isn't really a secure validation because front-end code can
  // be edited by the client. This is just a placeholder for the real
  // security validation that needs to go on the server.
  const sanitizeInput = (input) => {
    let validChars = /^[a-zA-Z0-9]*$/g;
    let regexResult = validChars.exec(input);
    return regexResult ? regexResult[0] : "";
  };

  const getHttpResponse = (subredditInput) => {
    if (isLoading) return <TailSpin color="#6200ee" />;
    if (error) return <ErrorMessage msg={error} />;
    if (redditSubmissions)
      return (
        <React.Fragment>
          <HeatmapTitle subreddit={subredditInput} />
          <RedditDataList data={redditSubmissions} />
        </React.Fragment>
      );
    return <ErrorMessage msg={error} />;
  };

  const subredditInput = sanitizeInput(props.subreddit);

  useEffect(() => {
    if (!subredditInput || subredditInput.length === 0) return;
    setError(null);
    setIsLoading(true);
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const clientLocale = Intl.DateTimeFormat().resolvedOptions().locale;

    // get Reddit submission data from Reddit API
    fetch(`https://www.reddit.com/r/${subredditInput}/top.json?t=month&limit=100`)
      .then((response) => response.json())
      .then((data) => {
        // deny searches for explicit content
        const isExplicitContent = data.data.children
          .map((item) => item.data.over_18)
          .every((val) => val === true);
        if (isExplicitContent) {
          setIsLoading(false);
          setError("Explicit content not allowed. Please try a different subreddit.");
          return;
        }

        const redditData = data.data.children.map((item) => {
          const postCreationDate = new Date(item.data.created_utc * 1000);

          return {
            subreddit: subredditInput,
            upvote_ratio: item.data.upvote_ratio,
            unix_time: postCreationDate,
            day: postCreationDate.getDay(),
            date: postCreationDate
              .toLocaleString(clientLocale, { timeZone: clientTimeZone })
              .split(", ")[0],
            time: postCreationDate
              .toLocaleString(clientLocale, { timeZone: clientTimeZone })
              .split(", ")[1],
            hour:
              postCreationDate
                .toLocaleString(clientLocale, {
                  timeZone: clientTimeZone,
                  hour12: false,
                })
                .split(", ")[1]
                .split(":")[0] % 24,
          };
        });

        redditData.sort((a, b) => b.upvote_ratio - a.upvote_ratio);
        redditData.sort((a_1, b_1) => parseInt(a_1.hour) - parseInt(b_1.hour));
        redditData.sort((a_2, b_2) => parseInt(a_2.day) - parseInt(b_2.day));

        setIsLoading(false);
        if (redditData) setRedditSubmissions(redditData);
        else setRedditSubmissions(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(`Error: No data available for subreddit: "${subredditInput}"`);
      });
  }, [subredditInput]);

  // send the subreddit search to the sever so we can track popular searches
  useEffect(() => {
    if (redditSubmissions && redditSubmissions.length > 0) {
      fetch("https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json", {
        method: "POST",
        body: JSON.stringify({
          subreddit: redditSubmissions[0].subreddit.toLowerCase(),
          count: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [redditSubmissions]);

  return getHttpResponse(subredditInput);
};

export default FetchHeatmap;
