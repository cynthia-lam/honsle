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
    const guess = e.target.elements[0].value;
    setCurrentGuess(guess);
    setTryNumber(tryNumber + 1);
  };

  function display() {
    if (tryNumber < tryLimit) {
      return (
        <GuessList guess={currentGuess} tryNumber={tryNumber}/>
      )
    }
    return(
      <p>Game over modal to be added here!</p>
    )
  };

  return (
    <div className="App">
      <header className="App-header">
        {display()}
        <Input onSubmit={handleSubmit}/>
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