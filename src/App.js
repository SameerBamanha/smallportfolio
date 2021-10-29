import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
};

export default App;
