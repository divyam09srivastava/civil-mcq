
import './App.css';

import MultilineTextFields from "./Components/Questions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Frontpage from "./Components/Frontpage"
import Section1 from "./Components/Buildingmaterialcomp/Section1"
import Addtopics from "./Components/Addtopics"
import Addtopics2 from "./Components/Addtopic2"
import Section2 from "./Components/Buildingmaterialcomp/Section2"
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Route exact path="/1/:topic">
        <Section1 />
      </Route>
      <Route exact path="/2/:topic">
        <Section2 />
      </Route>
      <Route exact path="/1/:topic/:sec">
       <Section1 />
      </Route>

      
      
      
      
    </Switch>
  </BrowserRouter>
  );
}

export default App;
