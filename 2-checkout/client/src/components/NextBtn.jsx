import React from 'react';

const NextBtn = ({ callback }) => <button type='submit' onClick={() => callback()}>Next</button>;

export default NextBtn;