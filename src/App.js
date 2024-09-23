// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Input from './Input';
import GuessList from './GuessList';

function App() {
  const tryLimit = 6;
  const answer = "honse"; // Eventually change this to get random word from API call in the future
  const [tryNumber, setTryNumber] = useState(1);
  const [guesses, setGuesses] = useState(["     ", "     ", "     ", "     ", "     ", "     "]);
  const [gameState, setGameState] = useState('in play'); //'in play', 'won', 'lost'

  function verifyGuess (input) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (const letter of input) {
      if (!letters.includes(letter)) {
        return false;
      }
    }
    return true;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const guess = e.target.elements[0].value;

    // Check if it's the winning guess
    if (guess === answer) {
      setGameState('won');
    }

    // Check if it's the losing guess
    if (tryNumber >= tryLimit) {
      setGameState('lost');
    }
    
    if (gameState === 'in play') {
      if (verifyGuess(guess.toLowerCase())) { // Validate that only letters were inputted
        const newGuesses = [...guesses];
        newGuesses[tryNumber - 1] = guess; // Update the guess list with the current guess
        setGuesses(newGuesses); // Add new guess to the array
        setTryNumber(tryNumber + 1);
        console.log(`Try number: ${tryNumber}`);
        console.log(`Try limit: ${tryLimit}`);

      } else {
        alert('Please input alphabet characters only');
      }
      e.target.reset(); // Clear the input field after submission
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <GuessList guesses={guesses} />
        {gameState === 'in play' && (
          <Input onSubmit={handleSubmit}/>
        )}
        {gameState === 'won' && (
          <p>ur great</p>
        )}
        {gameState === 'lost' && (
          <p>u suck</p>
        )}
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