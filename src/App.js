import { useState } from "react";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import SearchBar from "./components/SearchBar";
import FetchHeatmapData from "./http-requests/FetchHeatmapData";
import FetchPopularSearches from "./http-requests/FetchPopularSearches";
import styles from "./App.module.css";

const App = () => {
  const [subreddit, setSubreddit] = useState(null);

  const onSubmitHandler = (sub) => {
    setSubreddit(sub);
  };

  return (
    <div className={styles["app"]}>
      <Navbar />
      <Instructions />
      <SearchBar onSubmit={onSubmitHandler} />
      {subreddit && <FetchHeatmapData subreddit={subreddit} />}
      <FetchPopularSearches />
    </div>
  );
};

export default App;
