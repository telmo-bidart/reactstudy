import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      <li>
          <Link to="/empresa">Empresa</Link>
        </li>
         <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/empresa">
        <Empresa />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
    </Switch>
    </Router>
  )
}

export default App