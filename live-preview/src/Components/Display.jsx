import React from 'react';
import Buttons from './Button';

function Display() {
  const lists = [
    {
      id: 1,
      title: 'React hooks',
      notes: 'sskjcnkslnclksmcklsmc;lsa/cs/acs;cmsl;msml/s/dalmc/sm',
    },

    {
      id: 2,
      title: 'React hooks',
      notes: 'sskjcnkslnclksmcklsmc;lsa/cs/acs;cmsl;msml/s/dalmc/sm',
    },

    {
      id: 3,
      title: 'Redux hooks',
      notes: 'sskjcnkslnclksmcklsmc;lsa/cs/acs;cmsl;msml/s/dalmc/sm',
    },
    {
      id: 4,
      title: 'React Redux',
      notes: 'sskjcnkslnclksmcklsmc;lsa/cs/acs;cmsl;msml/s/dalmc/sm',
    },

    {
      id: 5,
      title: 'Note App with React and Sass',
      notes: 'sskjcnkslnclksmcklsmc;lsa/cs/acs;cmsl;msml/s/dalmc/sm',
    },
  ];
  return (
    <div className="display">
      <ul className="notes">
        {lists.map((list) => (
          <li key={list.id}>
            {list.title}{' '}
            <div className="btns">
              <Buttons value="Edit" label="Edit" />
              <Buttons value="view" label="view" />
              <Buttons value="delete" label="delete" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
