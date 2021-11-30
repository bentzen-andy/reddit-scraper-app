import React, { useState, useEffect } from "react";
import { TailSpin } from "../components/loading-spinners/TailSpin";
import ErrorMessage from "../components/error-msg/ErrorMessage";
import RedditDataList from "../components/heatmap/RedditDataList";
import HeatmapTitle from "../components/heatmap/HeatmapTitle";

const FetchHeatmap = (props) => {
  const [redditSubmissions, setRedditSubmissions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ========================================
  // Helper Function
  // Determines if the posts in a given subreddit is exclusively
  // made up of explicit material.
  // ----------------------------------------
  const isExplicitContent = (data) => {
    return data.data.children
      .map((item) => item.data.over_18)
      .every((val) => val === true);
  };

  // ========================================
  // Helper Functions
  // The following determine date/time of reddit submissions.
  // ----------------------------------------
  const getClientTimezone = () => {
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const clientLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    return { clientTimeZone, clientLocale };
  };

  const getSubredditDate = (postCreationDate, clientLocale, clientTimeZone) => {
    return postCreationDate
      .toLocaleString(clientLocale, { timeZone: clientTimeZone })
      .split(", ")[0];
  };

  const getSubredditTime = (postCreationDate, clientLocale, clientTimeZone) => {
    return postCreationDate
      .toLocaleString(clientLocale, { timeZone: clientTimeZone })
      .split(", ")[1];
  };

  const getSubredditHour = (postCreationDate, clientLocale, clientTimeZone) => {
    return (
      postCreationDate
        .toLocaleString(clientLocale, {
          timeZone: clientTimeZone,
          hour12: false,
        })
        .split(", ")[1]
        .split(":")[0] % 24
    );
  };

  // ========================================
  // Helper Function
  // Switch to determine what to render given state of the data from HTTP request.
  // ----------------------------------------
  const getHttpResponse = () => {
    if (isLoading) return <TailSpin color="#6200ee" />;
    if (error) return <ErrorMessage msg={error} />;
    if (redditSubmissions) {
      return (
        <React.Fragment>
          <HeatmapTitle subreddit={props.subreddit} />
          <RedditDataList data={redditSubmissions} />
        </React.Fragment>
      );
    }
    return <ErrorMessage msg={error} />;
  };

  // ========================================
  // HTTP Request
  // Gets data from Reddit API and refines it to display in a heatmap.
  // Reddit data = top scoring submissions for a given subreddit.
  // Data refinement = reduces it to name of subreddit and time of posting.
  // ----------------------------------------
  useEffect(() => {
    if (!props.subreddit || props.subreddit.length === 0) return;
    setError(null);
    setIsLoading(true);

    // get Reddit submission data from Reddit API
    fetch(`https://www.reddit.com/r/${props.subreddit}/top.json?t=month&limit=100`)
      .then((response) => response.json())
      .then((data) => {
        // deny searches for explicit content
        if (isExplicitContent(data)) {
          setIsLoading(false);
          setError("Explicit content not allowed. Please try a different subreddit.");
          return;
        }

        // filter data down to subreddit and date/time info
        const { clientTimeZone, clientLocale } = getClientTimezone();
        const redditData = data.data.children.map((item) => {
          const postCreationDate = new Date(item.data.created_utc * 1000);
          return {
            subreddit: props.subreddit,
            upvote_ratio: item.data.upvote_ratio,
            unix_time: postCreationDate,
            day: postCreationDate.getDay(),
            date: getSubredditDate(postCreationDate, clientLocale, clientTimeZone),
            time: getSubredditTime(postCreationDate, clientLocale, clientTimeZone),
            hour: getSubredditHour(postCreationDate, clientLocale, clientTimeZone),
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
        setError(`Error: No data available for subreddit: "${props.subreddit}"`);
      });
  }, [props.subreddit]);

  return getHttpResponse(props.subreddit);
};

export default FetchHeatmap;
