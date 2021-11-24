import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import SearchBar from "./components/SearchBar";
import FetchHeatmap from "./http-requests/FetchHeatmap";
import FetchPopularSearches from "./http-requests/FetchPopularSearches";

const App = () => {
  const [subreddit, setSubreddit] = useState(null);

  const onSubmitHandler = (sub) => {
    setSubreddit(sub);
  };

  return (
    <div className="App">
      <Navbar />
      <Instructions />
      <SearchBar onSubmit={onSubmitHandler} />
      {subreddit && <FetchHeatmap subreddit={subreddit} />}
      <FetchPopularSearches subreddit={subreddit} />
    </div>
  );
};

export default App;
