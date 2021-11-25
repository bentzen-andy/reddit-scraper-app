import React, { useState, useEffect } from "react";
import { TailSpin } from "../components/loading-spinners/TailSpin";
import ErrorMessage from "../components/error-msg/ErrorMessage";
import RedditDataList from "../components/heatmap/RedditDataList";
import HeatmapTitle from "../components/heatmap/HeatmapTitle";

const FetchHeatmap = (props) => {
  const [redditSubmissions, setRedditSubmissions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getHttpResponse = () => {
    if (isLoading) return <TailSpin color="#6200ee" />;
    if (error) return <ErrorMessage msg={error} />;
    if (redditSubmissions)
      return (
        <React.Fragment>
          <HeatmapTitle
            subreddit={redditSubmissions[0].subreddit.toLowerCase()}
          />
          <RedditDataList data={redditSubmissions} />
        </React.Fragment>
      );
    return <ErrorMessage msg={error} />;
  };

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const clientLocale = Intl.DateTimeFormat().resolvedOptions().locale;

    // get Reddit submission data from Reddit API
    fetch(
      `https://www.reddit.com/r/${props.subreddit}/top.json?t=month&limit=100`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0) {
          setIsLoading(false);
          setError(null);
          setRedditSubmissions(null);
          return;
        }

        const redditData = data.data.children.map((item) => {
          const postCreationDate = new Date(item.data.created_utc * 1000);

          return {
            subreddit: props.subreddit,
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
        setError(
          `Error: No data available for subreddit: "${props.subreddit}"`
        );
      });
  }, [props.subreddit]);

  // send the subreddit search to the sever so we can track popular searches
  useEffect(() => {
    if (redditSubmissions && redditSubmissions.length > 0) {
      fetch(
        "https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json",
        {
          method: "POST",
          body: JSON.stringify({
            subreddit: redditSubmissions[0].subreddit.toLowerCase(),
            count: 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }, [redditSubmissions]);

  return getHttpResponse();
};

export default FetchHeatmap;
