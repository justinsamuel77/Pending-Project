import React from "react";
//STORE - global state
import { createStore } from "redux";

const TestRedux = () => {
  //ACTION - it describes what you want to do
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };

  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };

  //REDUCER - describe transforms to next state
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  const store = createStore(counter);

  store.subscribe(() => console.log(store.getState()));

  //DISPATCH - execute the action
  store.dispatch(increment());
  //   store.dispatch(decrement());

  return (
    <>
      <h1>Redux</h1>
    </>
  );
};

export default TestRedux;
