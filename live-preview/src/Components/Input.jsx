import React from 'react';

export const Input = (props) => {
  return (
    <div className="inputscontainer">
      <form className="form">
        <label htmlFor="title">
          <input
            type="text"
            placeholder="Add note title"
            onChange={props.handleTitle}
          />
        </label>

        <label htmlFor="markdown-content">Write notes using markdown</label>
        <textarea
          id="markdown-content"
          onChange={props.handleChange}
          defaultValue={props.currentValue}
          placeholder={props.currentValue}
        />
        <button type="button">Save</button>
      </form>
    </div>
  );
};

export default Input;
