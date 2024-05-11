import { useState } from "react";
//recibe el prop con la funcion para darle a conocer al padre el contenidno de la nota
function CreateArea({ getNote }) {
  //   const [title, setTitle] = useState("");
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  //Sirve para manejar los cambios en el titulo
  function handleInput(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  //Manejar los cambios en el text area
  //   function handleTextArea(e) {
  //     const { value } = e.target;
  //     setNote(value);
  //   }
  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getNote(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
