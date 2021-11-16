import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import SearchBar from "./components/SearchBar";
import FetchHeatMap from "./http-requests/FetchHeatMap";

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
      {subreddit && <FetchHeatMap subreddit={subreddit} />}
    </div>
  );
};

export default App;
