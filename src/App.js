import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>emanuelRosa</h1>
        <h2>신비한 사람</h2>

        <nav>
          <ul>
            <li>
              <a href="https://github.com/#">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/#">Twitter</a>
            </li>
          </ul>
        </nav>

        <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path className="wavePath" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path></svg>

      </div>
    );
  }
}

export default App;