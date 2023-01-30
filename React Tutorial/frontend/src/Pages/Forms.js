import React, { useState } from "react";

const Forms = () => {
  const [fruits, setFruits] = useState(false);

  const handleCheck = (e) => {
    setFruits(e.target.checked);
    if (fruits) {
      console.log("unchecked");
    } else {
      console.log("checked");
    }
  };

  return (
    <>
      <h1>Forms Page</h1>
      <h2>Checkbox</h2>
      <label>Apple</label>
      <input type="checkbox" name="apple" id="apple" onChange={handleCheck} />

      <label>Orange</label>
      <input type="checkbox" name="orange" id="orange" onChange={handleCheck} />

      <label>Mango</label>
      <input type="checkbox" name="mango" id="mango" onChange={handleCheck} />

      <br />
      <br />

      <label>Address</label>
      <textarea name="address" rows="3" cols="20"></textarea>
    </>
  );
};

export default Forms;
