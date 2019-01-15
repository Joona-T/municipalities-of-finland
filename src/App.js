import React, { Component } from 'react';
import Header from './components/Header/Header';
import PopulationChart from './components/Charts/PopulationChart/PopulationChart'
// JSON-file containing names and populations of Finland's ten most populated municipalities.
import muniData from './data/fin-municipalities.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PopulationChart chartData={muniData.municipalities}/>
      </div>
    );
  }
}

export default App;
