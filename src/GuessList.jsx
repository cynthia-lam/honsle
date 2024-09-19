 import GuessWord from "./GuessWord";

function GuessList (props) {
  const guesses = props.guesses;
  return (
    <ul>
      {guesses.map((guess, index) => (
        <li key={index}>
          <GuessWord guess={guess} />
        </li>
      ))}
    </ul>
  )
}

export default GuessList;