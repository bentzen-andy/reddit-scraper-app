import React, { useState } from "react";

const SearchBar = (props) => {
  const [subreddit, setSubreddit] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(subreddit);
  };

  const subredditChangeHandler = (event) => {
    setSubreddit(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="subreddit">Choose a subreddit: r/</label>
      <input
        type="text"
        id="subreddit"
        name="subreddit"
        onChange={subredditChangeHandler}
      />
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
