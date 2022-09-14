import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => {
  return <button>Click Me!</button>;
};
const element = <CustomButton />;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
