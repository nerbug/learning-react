import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
