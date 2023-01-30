import React, { useState } from "react";

const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (firstname.length == 0 || lastname.length == 0) {
    //   setError(true);
    // }
    // console.log(firstname, lastname);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <div>
          <input onChange={(e) => setFirstname(e.target.value)} />
        </div>
        {firstname == "" ? <p>First Name is Required</p> : null}

        {/* <label>Last Name</label>
        <div>
          <input onChange={(e) => setLastname(e.target.value)} />
        </div>
        {error ? <p>Last Name is Required</p> : ""}

        <label>Email</label>
        <div>
          <input onChange={(e) => setEmail(e.target.value)} />
        </div>
        {error ? <p>Email is Required</p> : ""} */}

        <button type="button">Submit</button>
      </form>
    </>
  );
};

export default RegisterForm;
