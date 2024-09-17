// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Input from './Input';
// import { useState } from 'react';
import GuessList from './GuessList';

function App() {
  const tryLimit = 6;
  const [tryNumber, setTryNumber] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    const guess = e.target;
    setCurrentGuess(guess);
  };

  function display() {
    while (tryNumber > tryLimit) {
      return (
        <GuessList guess={currentGuess}/>
      )
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {display()}
        <Input/>
      </header>
    </div>
  );
}

export default App;

// planning
/* 
- state/global vars: tryLimit, tryNumber
- flow:
  - guess at bottom
  - onSubmit: tryNumber ++, populate <GuessList/> with <GuessLetter/> mapped through currentGuess
  - assign colours based on rules
- functions:
  - display: keep on running while tryNumber <= try Limit
  - letterChecker: assigns styling based on letter
  - openModal: when gameOver
*/