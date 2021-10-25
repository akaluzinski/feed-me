import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsInvalid, setEnteredNameIsInvalid] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setEnteredNameIsInvalid(true);
      return;
    }

    console.log(enteredName);
    setEnteredNameIsInvalid(false);
    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {enteredNameIsInvalid && <p>Entered name is invalid</p>}
    </form>
  );
};

export default SimpleInput;
