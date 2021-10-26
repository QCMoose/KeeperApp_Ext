import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    key: uuidv4(),
    title: null,
    content: null
  });

  function onChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={onChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={onChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button
          onClick={() => {
            props.addNote(newNote);
            setNewNote({
              key: uuidv4(),
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
