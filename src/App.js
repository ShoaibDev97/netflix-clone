import React from "react";
import "./App.css";
import requests from "./requests";

// Components
import Row from "./components/Row";

const App = () => {
  return (
    <div className="App">
      <h1>Clean Application</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
