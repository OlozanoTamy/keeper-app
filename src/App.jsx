import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./App.css";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  //Recibe la nota desde el hijo a manera de obj y por medio de decosntructurin es addicionado
  function getNote(note) {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
  }

  function Deleteid(id) {
    setNotes((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea getNote={getNote} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            borrar={Deleteid}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
