import React, { useState, useEffect } from "react";
import PopularSearchList from "../components/PopularSearchList";

const FetchPopularSearches = (props) => {
  const [popularSearches, setPopularSearches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let arr = [];
        for (let key in data) {
          arr.push(data[key]);
        }
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

// fetch(
//   "https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json",
//   {
//     method: "POST",
//     body: JSON.stringify({subreddit: "askreddit", count: 3}),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }
// )
