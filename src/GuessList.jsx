 import GuessWord from "./GuessWord";
 import "./styles/GuessList.css";

function GuessList (props) {
  const guesses = props.guesses;
  return (
    <ul className="guessList">
      {guesses.map((guess, index) => (
        <li key={index}>
          <GuessWord guess={guess} />
        </li>
      ))}
    </ul>
  )
}

export default GuessList;