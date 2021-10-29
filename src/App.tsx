import React from 'react';
import './App.css';
import OnOff from './components/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion'
import UncontrolledRating from './components/UncontrolledRating'


export default function App() {
  return (
    <div className="App">
      <OnOff />
      <UncontrolledAccordion titleValue="If you want to see something interesting, then click on me" />
      <UncontrolledRating value= {3} maxValue = {5}/>
    </div>
  );
}
