import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [subreddit, setSubreddit] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(subreddit);
    setSubreddit("");
  };

  const subredditChangeHandler = (event) => {
    setSubreddit(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label className={styles["searchbar__label"]} htmlFor="subreddit">
        www.reddit.com/r/
      </label>
      <input
        className={styles["searchbar__input"]}
        type="text"
        id="subreddit"
        name="subreddit"
        placeholder="askreddit"
        value={subreddit}
        onChange={subredditChangeHandler}
      />
      <Button
        className={styles["searchbar__btn"]}
        btnText="Submit"
        type="submit"
      />
    </form>
  );
};

export default SearchBar;
