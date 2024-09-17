import GuessLetter from "./GuessLetter";

function GuessList (props) {
  const guesses = ["     ", "     ", "     ", "     ", "     ", "     "]
  const { guess, tryNumber } = props;
  guesses[tryNumber-1] = guess;

  return (
    <ul>
      {guesses.map((guess, index) => (
        <li key={index}>
          <GuessLetter guess={guess} /> {/* Optionally use GuessLetter component */}
        </li>
      ))}
    </ul>
  )
}

export default GuessList;