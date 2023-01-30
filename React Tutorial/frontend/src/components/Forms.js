// import React, { useEffect, useState } from "react";
// // import Todos from "./Todos";
// import TodosComponent from "./Todos";
// import { useDispatch } from "react-redux";
// import { addTodo } from "../Redux/todoapp/actions";

// const Forms = () => {
//   const dispatch = useDispatch();
//   const [todoValue, setTodoValue] = useState("");
//   const [editValue, setEditValue] = useState("");
//   const [editTodo, setEditTodo] = useState("");
//   const [arr, setArr] = useState([]);

//   useEffect(() => {}, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let date = new Date();
//     let time = date.getTime();
//     console.log(date, "date");
//     console.log(time, "time");

//     let todoObj = {
//       id: time,
//       todo: todoValue,
//       completed: "false",
//     };
//     arr.push(todoObj);
//     dispatch(addTodo(arr));
//     setTodoValue("");
//   };

//   return (
//     <div>
//       <h1>Forms</h1>
//       <form>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="type something"
//           value={todoValue}
//           onChange={(e) => setTodoValue(e.target.value)}
//         />

//         <button type="button" onClick={handleSubmit} value={todoValue}>
//           Save
//         </button>
//         <br />
//         <br />

//         <TodosComponent editFormVisibility />
//       </form>
//     </div>
//   );
// };

// export default Forms;

// // return todos.map((todo) => {
// //   <div key={todo.id}>
// //     <div>
// //       <input type="checkbox" checked={todo.completed} />
// //       <p style={todo.completed === true ? { color: "red" } : null}>
// //         {todo.todo}
// //       </p>
// //   </div>
// //   <button type="button">Edit</button>
// //   <button type="button">Delete</button>
// // </div>;
// // });

import React, { useState } from "react";
import { Todos } from "./Todos";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoapp/actions/index.js";
// import { addTodo } from "../Redux/todoapp/actions";

const Forms = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  let date = new Date();
  let time = date.getTime();

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();

    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Save
      </button>
      <Todos />
    </>
  );
};

export default Forms;
