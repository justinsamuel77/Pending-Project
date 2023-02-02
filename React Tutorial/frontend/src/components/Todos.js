// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, findTodo, addTodo } from "../Redux/todoapp/actions/index.js";

// export const Todos = () => {
//   const todos = useSelector((state) => state.operationsReducers);
//   console.log(todos, "todos");
//   const [check, setCheck] = useState(false);
// //   const dispatch = useDispatch(false);
//   const [inputValue, setInputValue] = useState("");
//   const [editTodo, setEditTodo] = useState(false);
//   const [todoValue, setTodoValue] = useState("")
//   const dispatch = useDispatch();
//   const [editFormVisibility, setEditFormVisibility] = useState(false)

//   const handleEditClick = () => {
//     setEditFormVisibility(true);
//   }

//   let date = new Date();
//   let time = date.getTime();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let date = new Date();
//     let time = date.getTime();

//     let todoObj = {
//       id: time,
//       todo: todoValue,
//       completed: false,
//     };
//     setTodoValue("");
//     dispatch(addTodo(todoObj));
//   };

//   const handleCheck = (e, getTodo, index) => {
//     console.log(getTodo, 'getindexval')
//     console.log(index, 'indexVal')
//     console.log(e, 'hcee')
//     // if (e.target.checked) s{
//     //   setCheck(true);
//     // } else {
//     //   setCheck(false);
//     // }
//   };

//   return (
//     <>
//     {editFormVisibility===false?(
//       <div>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         value={todoValue}
//         onChange={(e) => setTodoValue(e.target.value)}
//       />
//       <button type="button" onClick={handleSubmit}>
//         Save
//       </button>
//     </div>
//     ):(
//       <div>
//         <label>Update todo</label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//       />
//       <button type="button">
//         Update
//       </button>
//     </div>
//     )}
    
//       <h1>Todos</h1>
//       {todos.map((getTodo, index) => {
//         return (
//           <>
          
//             <div>
//               {check == false ? (
//                 <div>
//                   {editFormVisibility===false&&(
//                     <input
//                     type="checkbox"
//                     name="name"
//                     id="name"
//                     value={getTodo.id}
//                     onClick={()=>handleCheck(getTodo, index)}
//                   />
                  
//                   )}
//                   {console.log(index, 'index')}
//                   <div>
//                   <p>{getTodo.todo}</p>
//                   {editFormVisibility===false}
//                   <button
//                     type="button"
//                     onClick={() => handleEditClick(getTodo)}
//                   >
//                     Edit
//                   </button>
//                   &nbsp;
//                   <button
//                     type="button"
//                     onClick={() => dispatch(removeTodo(getTodo.id))}
//                   >
//                     Delete
//                   </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div style={{ marginLeft: "400px" }}>
//                   <input
//                     type="checkbox"
//                     name="name"
//                     id="name"
//                     value={getTodo.id}
//                     onClick={handleCheck}
//                   />
//                   <p>{getTodo.todo}</p>
//                   <button type="button" onClick={handleEditClick}>
//                     Edit
//                   </button>
//                   &nbsp;
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
import { Link, Button, Form, Container } from "react-bootstrap";
import {
  removeTodo,
  addTodo,
  handleEditSubmit,
  checkTodo,
} from "../Redux/todoapp/actions/index.js";

export const Todos = () => {
  const todos = useSelector((state) => state.operationsReducers);
  console.log(todos, "todos");
  const [check, setCheck] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState("");
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleEditClick = (getTodo) => {
    setEditFormVisibility(true);
    setEditTodo(getTodo);
    console.log(getTodo, "get");
  };
  // console.log(editTodo, "edditTodo");

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

  const handleCheck = async (e, getData) => {
    
    console.log(e, 'ggtgergb')
    let checkObj = {
      id: e.id,
      // todo: checkValue,
      // completed: false
    }
    dispatch(checkTodo(checkObj));
    console.log(e, 'vvvv')
    console.log(checkObj, 'checkObj')
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
    console.log(editedObj, "editobj");
    setEditValue("");
  };

  console.log(editTodo, "ET");
  console.log(editFormVisibility, "editFormVisibility");
  return (
    <>
      <Container fluid>
        {editFormVisibility === false ? (
          <div class="col-md-8 offset-md-2">
            <Form.Control
              className="inputcontrol"
              size="sm"
              type="text"
              name="name"
              id="name"
              placeholder="type something..."
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <Button
              type="button"
              style={{ marginTop: "15px" }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        ) : (
          <div>
            <form class="col-md-8 offset-md-2">
              <label>Update todo</label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <Button
                style={{ marginTop: "15px" }}
                type="button"
                onClick={editSubmit}
              >
                Update
              </Button>
            </form>
          </div>
        )}

        <div className="checktodo">
          <h1>Welcome</h1>

          <div>InProgress</div>
          {todos.map((getTodo) => {
            if (getTodo.completed == false) {
              return (
                <>
                  {/* <div>
                    <div> */}
                  <input
                    type="checkbox"
                    name="name"
                    id="name"
                    value={getTodo.id}
                    onClick={()=>handleCheck(getTodo)}
                  />
                  {console.log(getTodo, "gettodo")}

                  {/* <div className="btntodo"> */}
                  <p>{getTodo.todo}</p>
                  <Button
                    type="button"
                    onClick={() => handleEditClick(getTodo)}
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    type="button"
                    onClick={() => dispatch(removeTodo(getTodo.id))}
                  >
                    Delete
                  </Button>
                  {/* </div>
                    </div>
                  </div> */}
                </>
              );
            }
          })}

          <div>completed</div>
          {todos.map((getTodo) => {
            if (getTodo.completed == true) {
              return (
                <>
                  {/* <div>
                    <div style={{ marginLeft: "900px" }}> */}
                  <input
                    type="checkbox"
                    name="name"
                    id="name"
                    value={getTodo.id}
                    onClick={handleCheck}
                  />
                  <p>{getTodo.todo}</p>
                  <Button type="button" onClick={handleEditClick}>
                    Edit
                  </Button>
                  &nbsp;
                  <Button type="button">Delete</Button>
                  {/* </div>
                  </div> */}
                </>
              );
            }
          })}
        </div>
      </Container>
    </>
  );
};

export default Todos;
