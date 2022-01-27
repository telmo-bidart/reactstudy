import './App.css';
import Pessoa from './components/Pessoa';
import SayMyName  from './components/SayMyName';


function App() {

  return (
    <div className="App">
      <SayMyName nome="telmo"/>
      <Pessoa nome="Telmo" idade='22' profissao='desempregado' foto="https://via.placeholder.com/150" />

    </div>
  );
}

export default App;
