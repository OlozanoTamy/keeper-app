function Note({ title, content, id, borrar }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          borrar(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
