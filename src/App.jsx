import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./App.css";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      <Footer />
      {notes.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
    </>
  );
}

export default App;
