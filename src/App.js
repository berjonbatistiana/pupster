import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Discover from "./components/pages/Discover";
import About from "./components/pages/About";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route exact path="/discover" component={Discover} />
      </div>
    </Router>
  );
}
export default App;