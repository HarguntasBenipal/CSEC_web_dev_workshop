import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let i = 1

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#add').addEventListener('click', () => add());
  document.querySelector('#subtract').addEventListener('click', () => subtract());
})

function add(){
  console.log('hi')
  i = i + 1
  document.querySelector('#value').innerHTML = i;
}

function subtract(){
  console.log('hey')
  i = i - 1
  document.querySelector('#value').innerHTML = i;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
