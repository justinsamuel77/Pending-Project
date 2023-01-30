import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import RegisterForm from "./Pages/RegisterForm";
import Task1 from "./Pages/Task1";
import "./App.css";
import Register from "./Pages/Register";
import { Navbar } from "./Pages/Navbar";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { createStore } from "redux";
import TestRedux from "./Redux/TestRedux";
import { Provider } from "react-redux";
// import Todos from "./components/Todos";
import Forms from "./components/Forms";
import { store } from "./Redux/store";
// import Todos from "./Todos";

function App(editFormVisibility) {
  return (
    // <Provider>
    <BrowserRouter>
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/reg" element={<Task1 />} />
          <Route path="/regform" element={<RegisterForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/testredux" element={<TestRedux />} />

          <Route
            path="/reduxform"
            element={<Forms editFormVisibility={editFormVisibility} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
