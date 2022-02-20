import React, { useEffect, useState } from 'react';
import { Remarkable } from 'remarkable';
import Input from './Input';
import Output from './Output';

function getInitialNotes() {
  const storedTodos = localStorage.getItem('notes');
  const savedTodos = JSON.parse(storedTodos);
  return savedTodos || [];
}
const id = () => {
  Math.random().toString(36).slice(2);
};

const Markdown = () => {
  const [notes, setNotes] = useState(getInitialNotes());
  const [inputs, setInputs] = useState('"Write your **notes** here"');

  console.log(id());

  const md = new Remarkable();

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const getRawMarkup = () => {
    return { __html: md.render(inputs) };
  };

  useEffect(() => {
    const temp = JSON.stringify(notes);
    localStorage.setItem('notes', temp);
  }, [notes]);

  const addNewNote = (title) => {
    const newNote = {
      id: id(),
      inputs,
      title,
    };
    setNotes({ ...notes, newNote });
  };

  return (
    <div className="markdownContainer">
      <Input
        handleChange={handleChange}
        currentValue={inputs}
        value="notes"
        addNewNoteProps={addNewNote}
      />
      <Output dangerouslySetInnerHTML={getRawMarkup()} />
    </div>
  );
};

export default Markdown;
