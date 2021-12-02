import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FetchHeatmapData from "../http-requests/FetchHeatmapData";

const HeatmapSearch = (props) => {
  const [subreddit, setSubreddit] = useState("");

  const onSubmitHandler = (sub) => {
    setSubreddit(sub);
    props.onEnteredSubreddit(sub);
  };

  return (
    <React.Fragment>
      <SearchBar onSubmit={onSubmitHandler} />
      {subreddit && <FetchHeatmapData subreddit={subreddit} />}
    </React.Fragment>
  );
};

export default HeatmapSearch;
