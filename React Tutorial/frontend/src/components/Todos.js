import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Button, Form, Container } from "react-bootstrap";
import {
  removeTodo,
  addTodo,
  handleEditSubmit,
  checkTodo,
  uncheckTodo,
} from "../Redux/todoapp/actions/index.js";

export const Todos = () => {
  const todos = useSelector((state) => state.operationsReducers);
  console.log(todos, "todos");
  const [editTodo, setEditTodo] = useState("");
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState("");
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const filter = todos.filter((item) => {
    return item.completed == true;
  });

  console.log(filter, "fil");

  const newFilter = todos.filter((item) => {
    console.log(item, "item");
    return item.completed == false;
  });
  console.log(newFilter, "newFil");

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
    let checkObj = {
      id: e.id,
    };
    dispatch(checkTodo(checkObj));
    console.log(checkObj, "checkObj");
  };

  const handleCheck2 = async (e) => {
    let uncheckObj = {
      id: e.id,
    };
    dispatch(uncheckTodo(uncheckObj));
    console.log(uncheckObj, "uncheckObj");
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
        <h1 className="welcomealign">Welcome to Todo</h1>

        <div className="checktodo">
          <div>
            <div>
              {newFilter.length > 0 ? <div>InProgress</div> : null}
              {newFilter.map((getTodo) => {
                if (getTodo.completed == false) {
                  return (
                    <>
                      <div style={{ marginRight: "200px" }}>
                        <input
                          type="checkbox"
                          checked={false}
                          name="name"
                          id="name"
                          value={getTodo.id}
                          onClick={() => handleCheck(getTodo)}
                        />
                        {console.log(getTodo, "gettodo")}
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
                      </div>
                    </>
                  );
                }
              })}
            </div>

            <div>
              {filter.length > 0 ? (
                <div style={{ marginLeft: "400px" }}>Completed</div>
              ) : null}
              {filter.map((getTodo) => {
                if (getTodo.completed == true) {
                  return (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: "3%",
                          marginLeft: "400px",
                        }}
                      >
                        <>
                          <div>
                            <input
                              type="checkbox"
                              checked={true}
                              name="name"
                              id="name"
                              value={getTodo.id}
                              onClick={() => handleCheck2(getTodo)}
                            />
                            <p>{getTodo.todo}</p>
                          </div>
                        </>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div></div>
        </div>
      </Container>
    </>
  );
};

export default Todos;
