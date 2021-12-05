import { useState } from "react";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import HeatmapSearch from "./components/HeatmapSearch";
import FetchPopularSearches from "./http-requests/FetchPopularSearches";
import styles from "./App.module.css";

const App = () => {
  const [subreddit, setSubreddit] = useState(null);

  const handleSubreddit = (enteredSubreddit) => {
    setSubreddit(enteredSubreddit);
  };

  return (
    <div className={styles["app"]}>
      <Navbar />
      <Instructions />
      <HeatmapSearch subreddit={subreddit} onEnteredSubreddit={handleSubreddit} />
      <FetchPopularSearches subreddit={subreddit} onEnteredSubreddit={handleSubreddit} />
    </div>
  );
};

export default App;
