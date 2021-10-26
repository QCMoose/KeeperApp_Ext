import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(noteID) {
    // console.log(noteID);

    setNotes((prevNotes) => {
      console.log(prevNotes);
      console.log(noteID);

      return prevNotes.filter((item) => {
        return item.key !== noteID;
      });
    });
  }

  function createNotes(note) {
    return (
      <Note
        key={note.key}
        id={note.key}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map(createNotes)}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;

// const mattsNotes = [
//   {
//     key: 1,
//     title: "Note title",
//     content: "Note Content"
//   },
//   {
//     key: 2,
//     title: "Test note",
//     content: "More content for a note"
//   }
// ];
