import React, { Component } from 'react';
import './App.css';
import WorkHistory from "./log/workHistory";
import Box from "./tool/box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkHistory />
        <Box />
      </div>
    );
  }
}

export default App;
