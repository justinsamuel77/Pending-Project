import React from "react";
import NewFile from "./NewFile";

const Hello = () => {
  const handleEdit = () => {
    alert("Edit Alert");
  };

  const handleDelete = () => {
    alert("Remove Alert");
  };

  return (
    <>
      <h1>Page Hello</h1>
      <NewFile name="Dinesh"></NewFile>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Hello;
