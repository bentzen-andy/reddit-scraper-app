import React from "react";
import useInput from "../hooks/useInput";
import Button from "../UI/Button";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const {
    value: enteredSubreddit,
    isValid: subredditIsValid,
    isTouched: subredditIsTouched,
    valueChangeHandler: subredditChangeHandler,
    valueBlurHandler: subredditBlurHandler,
    reset: resetSubreddit,
  } = useInput((value) => value.trim().length > 0);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(enteredSubreddit.toLowerCase().trim());
    resetSubreddit();
  };

  const subredditValidationText =
    !subredditIsValid && subredditIsTouched ? (
      <div className={styles["searchbar__input--error"]}>
        Please enter a valid subreddit.
      </div>
    ) : null;

  const inputStyles =
    !subredditIsValid && subredditIsTouched
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
