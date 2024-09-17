import { useState } from "react";
import GuessLetter from "./GuessLetter";

function GuessList (props) {
  const guesses = props.guesses;
  return (
    <ul>
      {guesses.map((guess, index) => (
        <li key={index}>
          <GuessLetter guess={guess} />
        </li>
      ))}
    </ul>
  )
}

export default GuessList;