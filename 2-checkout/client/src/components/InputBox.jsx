import React from 'react';

const InputBox = ({ title, placeholderName, defaultVal, callback }) => (
  <li>
    <label>{title}</label>
    <input
    type='text'
    placeholder={placeholderName}
    defaultValue={defaultVal}
    onChange={(e) => callback(e)}
    />
  </li>
);

export default InputBox;