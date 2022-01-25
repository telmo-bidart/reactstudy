import './App.css';

function App() {
  const name = "telmo"

  const newName = name.toUpperCase()

  return (
    <div className="App">
      <h1>
        alternando o jsx
      </h1>
      <p>oi {newName}</p>
    </div>
  );
}

export default App;
