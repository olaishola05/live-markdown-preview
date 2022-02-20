import React, { useState } from 'react';

export const Input = (props) => {
  const [inputTitle, setInputTitle] = useState({ title: '' });

  const handleTitle = (e) => {
    setInputTitle({
      ...inputTitle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTitle.title.trim()) {
      props.addNewNoteProps(inputTitle.title);
      setInputTitle({ title: '' });
    } else {
      return 'A message to display on the ui here';
    }
  };
  return (
    <div className="inputscontainer">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            placeholder="Add note title"
            onChange={handleTitle}
            value={inputTitle.title}
            name="title"
          />
        </label>

        <label htmlFor="markdown-content">Write notes using markdown</label>
        <textarea
          id="markdown-content"
          onChange={props.handleChange}
          defaultValue={props.currentValue}
          placeholder={props.currentValue}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Input;
