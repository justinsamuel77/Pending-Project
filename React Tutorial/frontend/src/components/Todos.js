// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo } from "../Redux/todoapp/actions";
// import Forms from "./Forms";
// import { uncheckTodo } from "../Redux/todoapp/actions";

// export const Todos = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.operationsReducers);
//   const [check, setCheck] = useState(false);
//   // console.log(todos, "todos");

//   const handleCheck = (e) => {
//     // e.preventDefault();
//     // console.log("jjio", todo);
//     // if (e.target.checked) {
//     //   dispatch(uncheckTodo(todo));
//     //   console.log(e, "checked");
//     console.log(e);
//     setCheck(true);
//   };

//   // const filter = todos?.todo?.filter((i) => {
//   //   return i.completed == "true";
//   // });

//   // const newFilter = todos?.todo?.filter((i) => {
//   //   return i.completed == "false";
//   // });

//   // console.log(filter, newFilter, "fff");

//   return (
//     <>
//       <h1>Todos</h1>

//       {todos.map((getTodo) => {
//         return (
//           <>
//             <div>
//               {check == false ? (
//                 <div>
//                   <input
//                     type="checkbox"
//                     name="name"
//                     id="name"
//                     value={getTodo.id}
//                     onClick={handleCheck}
//                   />
//                   <p>{getTodo.todo}</p>
//                   <button type="button">Edit</button>
//                   <button type="button">Delete</button>
//                 </div>
//               ) : (
//                 <div style={{ marginLeft: "100px" }}>
//                   <input
//                     type="checkbox"
//                     name="name"
//                     id="name"
//                     value={getTodo.id}
//                     onClick={handleCheck}
//                   />
//                   <p>{getTodo.todo}</p>
//                   <button type="button">Edit</button>
//                   <button type="button">Delete</button>
//                 </div>
//               )}
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default Todos;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, findTodo } from "../Redux/todoapp/actions/index.js";

export const Todos = () => {
  const todos = useSelector((state) => state.operationsReducers);
  console.log(todos, "todos");
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch(false);
  const [inputValue, setInputValue] = useState("");
  const [editTodo, setEditTodo] = useState(false);

  const handleEditClick = async (editTodo) => {
    console.log(editTodo.todo, "hec");
    setEditTodo(true);
    setInputValue(editTodo.todo);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <>
      <h1>Todos</h1>
      {todos.map((getTodo) => {
        return (
          <>
            <div>
              {check == false ? (
                <div>
                  <input
                    type="checkbox"
                    name="name"
                    id="name"
                    value={getTodo.id}
                    onClick={handleCheck}
                  />
                  <p>{getTodo.todo}</p>
                  <button
                    type="button"
                    onClick={() => handleEditClick(getTodo)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    onClick={() => dispatch(removeTodo(getTodo.id))}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div style={{ marginLeft: "400px" }}>
                  <input
                    type="checkbox"
                    name="name"
                    id="name"
                    value={getTodo.id}
                    onClick={handleCheck}
                  />
                  <p>{getTodo.todo}</p>
                  <button type="button" onClick={handleEditClick}>
                    Edit
                  </button>
                  &nbsp;
                  <button type="button">Delete</button>
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Todos;
