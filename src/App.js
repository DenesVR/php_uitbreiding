import React from "react";
//import axios from "axios";
import "./App.css";
import GetRequest from "./components/GetRequest";
import PostRequest from "./components/PostRequest";

function App() {
  return (
    <>
      <PostRequest />
      <hr />
      <GetRequest />
    </>
  );
}

export default App;
