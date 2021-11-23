import React, { useState, useEffect } from "react";
import PopularSearchList from "../components/PopularSearchList";

const FetchPopularSearches = (props) => {
  const [popularSearches, setPopularSearches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getHttpResponse = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong...</p>;
    if (!popularSearches) return <p>no data...</p>;
    return <PopularSearchList data={popularSearches} />;
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setPopularSearches({});
          setIsLoading(false);
          return;
        }

        let subreddits = {};
        Object.entries(data).map((item) => {
          const currSub = item[1].subreddit;
          const currCnt = item[1].count;

          if (!subreddits[currSub]) {
            subreddits[currSub] = currCnt;
          } else {
            subreddits[currSub]++;
          }

          return null;
        });

        const popularSearches = Object.entries(subreddits).map((item) => {
          let subreddit = item[0];
          let count = item[1];
          return { subreddit, count };
        });

        popularSearches.sort((a, b) => b.count - a.count);
        popularSearches.splice(5, popularSearches.length);

        setIsLoading(false);
        setPopularSearches(popularSearches);
      })
      .catch((err) => setError("Something went wrong..."));
  }, [props.subreddit]);

  return getHttpResponse();
};

export default FetchPopularSearches;
