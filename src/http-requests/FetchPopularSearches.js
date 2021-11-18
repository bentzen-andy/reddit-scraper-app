import React, { useState, useEffect } from "react";
import PopularSearchList from "../components/PopularSearchList";

const FetchPopularSearches = (props) => {
  const [popularSearches, setPopularSearches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let popularSearchObject = {};
        for (let key in data) {
          if (!popularSearchObject[data[key].subreddit]) {
            popularSearchObject[data[key].subreddit] = data[key].count;
          } else {
            popularSearchObject[data[key].subreddit] =
              popularSearchObject[data[key].subreddit] + 1;
          }
        }

        let arr = [];
        for (let key in popularSearchObject) {
          arr.push({ subreddit: key, count: popularSearchObject[key] });
        }
        arr.sort((a, b) => b.count - a.count);

        setPopularSearches(arr);
      })
      .catch((err) => setError("Something went wrong..."));
  }, [props.subreddit]);

  if (popularSearches && popularSearches.length === 0)
    return <p>No data... </p>;
  if (popularSearches) return <PopularSearchList data={popularSearches} />;
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading... </p>;

  return <p>Something went wrong... </p>;
};

export default FetchPopularSearches;
