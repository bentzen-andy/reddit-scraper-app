import React, { useState, useEffect } from "react";
import RedditDataList from "../components/RedditDataList";

const FetchHeatMap = (props) => {
  const [redditSubmissions, setRedditSubmissions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const clientLocale = Intl.DateTimeFormat().resolvedOptions().locale;

    fetch(
      `https://www.reddit.com/r/${props.subreddit}/top.json?t=month&limit=100`
    )
      .then((response) => response.json())
      .then((data) => {
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
            hour: postCreationDate
              .toLocaleString(clientLocale, { timeZone: clientTimeZone })
              .split(", ")[1]
              .split(":")[0],
          };
        });

        redditData.sort((a, b) => b.upvote_ratio - a.upvote_ratio);
        redditData.sort((a_1, b_1) => parseInt(a_1.hour) - parseInt(b_1.hour));
        redditData.sort((a_2, b_2) => parseInt(a_2.day) - parseInt(b_2.day));

        if (redditData) setRedditSubmissions(redditData);
        else setRedditSubmissions(null);
      })
      .catch((err) => setError("Something went wrong..."));
  }, [props.subreddit]);

  // send the subreddit search to the sever so we can track popular searches
  useEffect(() => {
    if (redditSubmissions) {
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

  if (redditSubmissions && redditSubmissions.length === 0)
    return <p>No data... </p>;
  if (redditSubmissions) return <RedditDataList data={redditSubmissions} />;
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading... </p>;

  return <p>Something went wrong... </p>;
};

export default FetchHeatMap;
