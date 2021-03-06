import React from "react";

function Note(props) {
  const id = props.id;

  function removeNote() {
    props.deleteNote(id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={removeNote}>DELETE</button>
    </div>
  );
}

export default Note;
