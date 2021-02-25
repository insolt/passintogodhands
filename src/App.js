import React from "react";
import { 
  Switch, 
  HashRouter,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/form" component={Form} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
