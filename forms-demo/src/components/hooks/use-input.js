import { useState } from "react";

const useInput = (valudateValueFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = valudateValueFn(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
      setEnteredValue('');
      setIsTouched(false);
  }


  return {
    value: enteredValue,
    hasError,
    isValid,
    reset,
    valueChangedHandler,
    inputBlurHandler
  };
};

export default useInput;
