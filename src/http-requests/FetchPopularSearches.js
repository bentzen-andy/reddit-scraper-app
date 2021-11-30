import React, { useState, useEffect } from "react";
import { TailSpin } from "../components/loading-spinners/TailSpin";
import ErrorMessage from "../components/error-msg/ErrorMessage";
import PopularSearchList from "../components/PopularSearchList";

const FetchPopularSearches = (props) => {
  const [popularSearches, setPopularSearches] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ========================================
  // Helper Function
  // Processes data from the DB. Removes duplicates and gives counts.
  // ----------------------------------------
  const getSubredditCounts = (data) => {
    let subreddits = {};
    for (const item of Object.entries(data)) {
      const currSub = item[1].subreddit;
      const currCnt = item[1].count;

      if (!subreddits[currSub]) {
        subreddits[currSub] = currCnt;
      } else {
        subreddits[currSub]++;
      }
    }
    return subreddits;
  };

  // ========================================
  // Helper Function
  // Turns object into an array so we can sort it.
  // ----------------------------------------
  const getArrayFromObject = (subreddits) => {
    let popularSearches = Object.entries(subreddits).map((item) => {
      let subreddit = item[0];
      let count = item[1];
      return { subreddit, count };
    });

    return popularSearches;
  };

  // ========================================
  // Helper Function
  // Switch to determine what to render given state of the data from HTTP request.
  // ----------------------------------------
  const getHttpResponse = () => {
    if (isLoading) return <TailSpin color="#6200ee" />;
    if (error) return <ErrorMessage msg={error} />;
    return <PopularSearchList data={popularSearches} />;
  };

  // ========================================
  // HTTP Request
  // Sends the subreddit search to the sever so we can track popular searches
  // ----------------------------------------
  useEffect(() => {
    if (props.subreddit && props.subreddit.length > 0) {
      fetch("https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json", {
        method: "POST",
        body: JSON.stringify({
          subreddit: props.subreddit,
          count: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [props.subreddit]);

  // ========================================
  // HTTP Request
  // Gets a list of popular searches to display to the user as suggestions.
  // ----------------------------------------
  useEffect(() => {
    setIsLoading(true);

    fetch("https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json")
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          setIsLoading(false);
          return;
        }

        let subreddits = {};
        subreddits = getSubredditCounts(data);

        let popularSearches = [];
        popularSearches = getArrayFromObject(subreddits);

        popularSearches.sort((a, b) => b.count - a.count);
        popularSearches.splice(5, popularSearches.length);

        setIsLoading(false);
        setPopularSearches(popularSearches);
      })
      .catch((err) => setError("Something went wrong..."));
  }, []);

  return getHttpResponse();
};

export default FetchPopularSearches;
