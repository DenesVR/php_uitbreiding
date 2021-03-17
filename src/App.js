import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import axios from "axios";
import "./App.css";
import GetRequest from "./components/GetRequest";
import PostRequest from "./components/PostRequest";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">GET</Link>
            </li>
            <li>
              <Link to="/post">TOEVOEGEN</Link>
            </li>
            <li>
              <Link to="/put">PUT</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <GetRequest />
          </Route>
          <Route path="/post">
            <PostRequest />
          </Route>
          <Route path="/btw/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
