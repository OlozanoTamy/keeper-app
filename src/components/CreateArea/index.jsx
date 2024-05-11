import { useState } from "react";

function CreateArea({ getNote }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState(" ");
  //Sirve para manejar los cambios en el titulo
  function handleInput(e) {
    const { value } = e.target;
    setTitle(value);
  }
  //Manejar los cambios en el text area
  function handleTextArea(e) {
    const { value } = e.target;
    setNote(value);
  }
  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" />
        <textarea
          onChange={handleTextArea}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getNote([title, note]);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
