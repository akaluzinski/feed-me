import { useEffect, useRef, useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsInvalid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(!enteredNameIsInvalid);
    console.log("effect test", isFormValid);
  }, [enteredNameIsInvalid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      return;
    }

    resetNameInput();
    console.log(enteredName);
  };

  const nameInputClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangedHandler} onBlur={nameBlurHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {nameInputHasError && <p>Entered name is invalid</p>}
    </form>
  );
};

export default SimpleInput;
