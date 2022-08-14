import React, { createRef, useState } from "react";

const Form = () => {
  const nameRef = createRef(null);
  const ageRef = createRef(null);
  const [formData, setFormData] = useState({});
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const extractCurrentValueFromName = nameRef.current.value;
    const extractCurrentValueFromAge = ageRef.current.value;
    console.log(extractCurrentValueFromName, extractCurrentValueFromAge);

    setFormData({
      name: extractCurrentValueFromName,
      age: extractCurrentValueFromAge,
    });

    nameRef.current.value = "";
    ageRef.current.value = "";
  };
  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" ref={nameRef} />
        <input type="number" name="age" placeholder="Age" ref={ageRef} />
        <button type="submit">Submit</button>
      </form>
      {formData && Object.keys(formData).length > 0 ? (
        <div>
          <p>The name is {formData.name}</p>
          <p>Age is {formData.age}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
