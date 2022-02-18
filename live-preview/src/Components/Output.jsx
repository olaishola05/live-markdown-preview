import React from 'react';
export const Output = (props) => {
  return (
    <div className="output">
      <div
        className="content"
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      />
    </div>
  );
};

export default Output;
