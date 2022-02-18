import React from 'react';

function Buttons({ value, label }) {
  return (
    <div>
      <button type="button" className="button" value={value}>
        {label}
      </button>
    </div>
  );
}

export default Buttons;
