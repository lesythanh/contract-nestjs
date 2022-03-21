
import React from 'react';
import Nav from './component/Nav/Nav';
import Content from './component/Contract/Content';
import User from './component/User/User'
import EditConent from './component/Contract/EditConent.js'
import Attribute from './component/Attribute/Attribute';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {  
  return (              
    <Router>
        <Nav/>
        <Switch>
              <Route path="/contract" exact>
                  <User/>
              </Route>
              <Route path="/newContract" exact>
                  <Content/>
              </Route>
              <Route path="/EditContract" exact>
                  <EditConent/>
              </Route>
              <Route path="/listAttribute" exact>
                  <Attribute/>
              </Route>
            </Switch>  
    </Router> 
  ); 

}

export default App;
