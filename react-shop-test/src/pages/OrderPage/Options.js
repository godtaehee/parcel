import React from 'react';

const Options = ({ name }) => {
  return (
    <form>
      <input type="checkbox" />{' '}
      <label htmlFor={`${name} option`}>${name}</label>
    </form>
  );
};

export default Options;
