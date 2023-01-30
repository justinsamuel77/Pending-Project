// import { ADD_TODO, REMOVE_TODO, UNCHECK_TODO } from "../actions";

// const initialState = [
//   {id:1, todo:"laptop", completed: false},
//   {id:1, todo:"mobile", completed: false},
//   {id:1, todo:"computer", completed: false},
// ];

// export const operationsReducers = (state = initialState, action) => {
//   console.log(action.payload, state.todo, "vvvv");

//   switch (action.type) {
//     case "ADD_TODO":
//       return { ...state, todo: action.payload };
//     case "REMOVE_TODO":
//       console.log(action.payload);
//       const filteredTodos = state.filter((todo) => todo.id !== action.payload);
//       return {
//         ...state,
//         todo: state.todo.filter((todo) => {
//           return todo.id !== action.payload;
//         }),
//       };
//     case "UNCHECK_TODO":
//       console.log(action.payload, state, "aaaa");
//       return {
//         ...state,
//         todo: state.todo.map((t) => {
//           return t.id == action.payload.id ? (t.completed = "true") : t;
//         }),
//       };
//     default:
//       return state;
//   }
// };

import { ADD_TODO, REMOVE_TODO, FIND_TODO } from "../actions";

const initialState = [];

export const operationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filterData = state.filter((todo) => todo.id !== action.payload);
      return filterData;
    case FIND_TODO:
      const findData = state.find((todo) => todo.id == action.payload);
    default:
      return state;
  }
};
