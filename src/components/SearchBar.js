import React, { useState } from "react";
import useInput from "../hooks/useInput";
import Button from "../UI/Button";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [subredditIsValid, setSubredditIsValid] = useState(true);

  const {
    value: enteredSubreddit,
    valueChangeHandler: subredditChangeHandler,
    valueBlurHandler: subredditBlurHandler,
    reset: resetSubreddit,
  } = useInput();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredSubreddit.trim().length === 0) {
      setSubredditIsValid(false);
      resetSubreddit();
      return;
    }
    props.onSubmit(enteredSubreddit.toLowerCase().trim());
    setSubredditIsValid(true);
    resetSubreddit();
  };

  if (!subredditIsValid && enteredSubreddit.trim().length > 0) {
    setSubredditIsValid(true);
  }

  const subredditValidationText = !subredditIsValid && (
    <div className={styles["searchbar__input--error"]}>
      Please enter a valid subreddit.
    </div>
  );

  const inputStyles = !subredditIsValid
    ? `${styles["searchbar__input--box"]} ${styles["invalid"]}`
    : styles["searchbar__input--box"];

  return (
    <form onSubmit={submitHandler}>
      <label className={styles["searchbar__label"]} htmlFor="subreddit">
        www.reddit.com/r/
      </label>
      <div className={styles["searchbar__input"]}>
        {subredditValidationText}
        <input
          className={inputStyles}
          type="text"
          id="subreddit"
          name="subreddit"
          placeholder="askreddit"
          value={enteredSubreddit}
          onChange={subredditChangeHandler}
          onBlur={subredditBlurHandler}
        />
      </div>
      <Button className={styles["searchbar__btn"]} btnText="Submit" type="submit" />
    </form>
  );
};

export default SearchBar;
