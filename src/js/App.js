import React, { Component } from "react";
import AppContext from "./AppContext";
import Container from "./components/Container/Container";

class App extends Component {
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="widnow__container">
          <Container />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
