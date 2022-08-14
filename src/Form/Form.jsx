import React, { createRef, useState } from "react";

const Form = () => {

    const nameRef = createRef(null);
    const ageRef = createRef(null);
    const [formData , setFormData] = useState({})
    const handleFormSubmit = (e) => {
      e.preventDefault()
  };

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <input name="name" type="text" placeholder="Name" ref={nameRef} />
        <input name="age" type="number" placeholder="Age" ref={ageRef} />
        <button type = "submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
