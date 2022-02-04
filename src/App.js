import './App.css';
import Lista2 from './components/Lista2';

function App() {

const meusItens = ['react', 'vue', 'angulars']

  return (
    <div className="App">
      <h1>testando listas</h1>
      <Lista2 itens={meusItens}/>
      <Lista2 itens={[]}/>
    </div>
  );
}

export default App;
