import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example.js'
import Content from './Content.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Example />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

