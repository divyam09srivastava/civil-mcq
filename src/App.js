
import './App.css';

import MultilineTextFields from "./Components/Questions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Frontpage from "./Components/Frontpage"
import Section1 from "./Components/Buildingmaterialcomp/Section1"
import Addtopics from "./Components/Addtopics"
import Addtopics2 from "./Components/Addtopic2"
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        
        <Frontpage />
        
      </Route>
      <Route exact path="/add">
        <MultilineTextFields />
      </Route>
      <Route exact path="/addtopics">
        <Addtopics/>
      </Route>
      <Route exact path="/addtopics2">
        <Addtopics2/>
      </Route>
      <Route exact path="/:topic">
        <Section1 />
      </Route>
      <Route exact path="/:topic/:section">
       <Section1 />
      </Route>

      
      
      
      
    </Switch>
  </BrowserRouter>
  );
}

export default App;
