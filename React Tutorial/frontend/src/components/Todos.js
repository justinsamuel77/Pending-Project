import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, findTodo, addTodo } from "../Redux/todoapp/actions/index.js";

export const Todos = () => {
  const todos = useSelector((state) => state.operationsReducers);
  console.log(todos, "todos");
  const [check, setCheck] = useState(false);
//   const dispatch = useDispatch(false);
  const [inputValue, setInputValue] = useState("");
  const [editTodo, setEditTodo] = useState(false);
  const [todoValue, setTodoValue] = useState("")
  const dispatch = useDispatch();
  const [editFormVisibility, setEditFormVisibility] = useState(false)

  const handleEditClick = () => {
    setEditFormVisibility(true);
  }

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

  // const handleEditClick = async (editTodo) => {
  //   console.log(editTodo.todo, "hec");
  //   setEditTodo(true);
  //   setInputValue(editTodo.todo);
  // };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <>
    {editFormVisibility===false?(
      <div>
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
    </div>
    ):(
      <div>
        <label>Update todo</label>
      <input
        type="text"
        name="name"
        id="name"
      />
      <button type="button">
        Update
      </button>
    </div>
    )}
    
      <h1>Todos</h1>
      {todos.map((getTodo) => {
        return (
          <>
            <div>
              {check == false ? (
                <div>
                  {editFormVisibility===false&&(
                    <input
                    type="checkbox"
                    name="name"
                    id="name"
                    value={getTodo.id}
                    onClick={handleCheck}
                  />
                  )}
                  <div>
                  <p>{getTodo.todo}</p>
                  {editFormVisibility===false}
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
