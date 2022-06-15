import names from './data/data';

function App() {
  return (
    <ul>
      {names.map(name=>(
        <li>{name}</li>
      ))}
    </ul>
  )
}

export default App;
