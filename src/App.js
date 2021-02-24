import React from "react";
import { 
  Switch, 
  HashRouter,
  Route
} from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/" component={} />
          <Route path="/" component={} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
