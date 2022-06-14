import React from 'react';
import ReactDOM from 'react-dom/client';


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
