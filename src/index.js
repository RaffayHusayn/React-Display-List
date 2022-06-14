import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


function ShowList(){
  let names = ["Raffay", "Kin", "Johnny"];
  return (
    <ul>
      {names.map(name=>(
        <li>{name}</li>
      ))}
    </ul>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowList />
);
