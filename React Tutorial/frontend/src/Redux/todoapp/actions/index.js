// export const REMOVE_TODO = "REMOVE_TODO";
// export const EDIT_TODO = "EDIT_TODO";
// export const UNCHECK_TODO = "UNCHECK_TODO";

// export const addTodo = (payload) => {
//   console.log(payload, 'ppp')
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// export const removeTodo = (payload) => {
//   return {
//     type: REMOVE_TODO,
//     payload,
//   };
// };

// export const uncheckTodo = (payload) => {
//   console.log(payload, "pppp");
//   return {
//     type: UNCHECK_TODO,
//     payload,
//   };
// };

// // export const editTodo = (payload) => {
// //     return {
// //         type: EDIT_TODO,
// //         payload,
// //     }
// // }
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const FIND_TODO = "FIND_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const findTodo = (payload) => {
  return {
    type: FIND_TODO,
    payload,
  };
};
