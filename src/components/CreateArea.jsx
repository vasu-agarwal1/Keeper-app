import React, { useState } from "react";

function CreateArea(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function submitData(event) {
    props.onAdd(data);
    setData({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={data.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitData}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
