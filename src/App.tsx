import React from 'react';
import './App.css';
import OnOff from './components/OnOff';
import ControlledAccordion from './components/ControlledAccordion'
import UncontrolledRating from './components/UncontrolledRating'
import AccordionSecond from './components/AccordionSecond'

export default function App() {
  return (
    <div className="App">
      <OnOff />
      <ControlledAccordion titleValue="If you want to see something interesting, then click on me" />
      <UncontrolledRating value= {3} maxValue = {5}/>
      <AccordionSecond  />
    </div>
  );
}
