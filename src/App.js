
import './App.css';
import Header from './Components/header';
import Home from "./Components/Home"
import MultilineTextFields from "./Components/Questions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>

      <Route path="/add">
        <MultilineTextFields />
      </Route>
      
      
    </Switch>
  </BrowserRouter>
  );
}

export default App;
