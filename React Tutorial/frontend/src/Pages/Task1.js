import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialRadio = { male: "", female: "" };

const Task1 = () => {
  const [radioValue, setRadioValue] = useState(initialRadio);
  const { male, female } = radioValue;
  const [error, setError] = useState(false);
  const [storage, setStorage] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheck = (e) => {
    console.log(e.target.checked);
    setRadioValue(e.target.checked);
  };

  const handleSubmit = async (e) => {
    if (firstname.length <= 0) {
      setError(true);
    }

    if (lastname.length <= 0) {
      setError(true);
    }

    if (email.length <= 0) {
      setError(true);
    }

    if (password.length <= 0) {
      setError(true);
    }

    let obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    storage.push(obj);
    console.log(storage);
    if (obj.firstname == "") {
      console.log("name required");
    } else {
    }
  };

  const handleSubmit2 = () => {
    // alert("Hello");
  };

  const handleReset = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Register</h1>
      <label>First Name:</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      {firstname.length <= 0 && error ? <p>First Name is Required</p> : null}

      <label>Last Name:</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      {lastname.length <= 0 && error ? <p>Last Name is Required</p> : null}

      <label>Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email.length <= 0 && error ? <p>Email is Required</p> : null}

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {password.length <= 0 && error ? <p>Password is Required</p> : null}

      <br />
      <div>
        <label>Gender:</label>
        <br />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={male}
          onChange={handleCheck}
          defaultChecked={true}
        />

        <label>Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value={female}
          onChange={handleCheck}
        />
      </div>

      <button type="button" onClick={handleSubmit} value={firstname}>
        Submit
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Task1;
