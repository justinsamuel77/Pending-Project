import React, { useEffect, useState } from "react";
import { Link, Button, Form, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IntialFormValue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(IntialFormValue);
  const { firstname, lastname, email, password, male, female } = formValue;
  const [gender, setGender] = useState();
  const [errors, setErrors] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 10000);
  // });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, ...{ [name]: value } });
  };

  const handleCheck = (e) => {
    setGender(e.target.value);
    console.log(e.target.value, "eeee");
  };

  const handleSubmit = async (e) => {
    try {
      const obj = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        male: male,
        female: female,
      };
      setFormValue(obj);

      if (firstname.length <= 0) {
        setErrors(true);
      }

      if (lastname.length <= 0) {
        setErrors(true);
      }

      let emailRegex = /.+@[^@]+\.[^@]{2,}$/;

      if (email.length <= 0) {
        setErrors(true);
      } else if (!emailRegex.test(obj.email)) {
        alert("email should contains 1 special character");
      }

      let passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if (password.length <= 0) {
        setErrors(true);
      } else if (!passwordValidate.test(obj.password)) {
        toast(
          "password should contains 1 special character minimum length 8 character"
        );
      } else {
        alert("Hello " + firstname);
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  const handleReset = () => {
    setFormValue(IntialFormValue);
  };

  return (
    <>
      <Container fluid>
        <Form>
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <h1 className="register">Register</h1>
              <div style={{ display: "flex", gap: "0px" }}>
                <label style={{ marginTop: "15px" }}>First Name:</label>
                <Form.Control
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={handleChange}
                  value={firstname}
                />

                {firstname.length <= 0 && errors ? (
                  <p style={{ color: "red" }}>firstname is required</p>
                ) : null}
              </div>
            </div>
            <p>{count}</p>
            <input type="button" onClick={() => setCount(count + 1)} />

            <div class="col-md-8 offset-md-2">
              <div style={{ display: "flex", gap: "0px" }}>
                <label style={{ marginTop: "15px" }}>Last Name:</label>
                <Form.Control
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={handleChange}
                  value={lastname}
                />

                {lastname.length <= 0 && errors ? (
                  <p style={{ color: "red" }}>lastname is required</p>
                ) : null}
              </div>
            </div>

            <div class="col-md-8 offset-md-2">
              <div style={{ display: "flex", gap: "0px" }}>
                <label style={{ marginTop: "15px" }}>Email:</label>
                <Form.Control
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={email}
                />

                {email.length <= 0 && errors ? (
                  <p style={{ color: "red" }}>email is required</p>
                ) : null}
              </div>
            </div>

            <div class="col-md-8 offset-md-2">
              <div style={{ display: "flex", gap: "0px" }}>
                <label style={{ marginTop: "15px" }}>Password:</label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={password}
                />

                {password.length <= 0 && errors ? (
                  <p style={{ color: "red" }}>password is required</p>
                ) : null}
              </div>
            </div>

            <div className="radioalign">
              <label className="genderalign">Gender</label>
              <Form.Check
                name="gender"
                label="Male"
                defaultChecked={true}
                value="Male"
                onChange={handleCheck}
                inline
                type="radio"
              />

              <Form.Check
                // style={{ marginTop: "20px" }}
                name="gender"
                label="Female"
                value="Female"
                onChange={handleCheck}
                inline
                type="radio"
              />
            </div>

            {/* <div className="btnassign">       */}
            <div className="btn">
              <Button size="sm" onClick={handleSubmit}>
                Submit
              </Button>
            </div>

            <div className="btn2">
              <Button size="sm" onClick={handleReset}>
                Reset
              </Button>
            </div>
            {/* </div> */}
          </div>
        </Form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
