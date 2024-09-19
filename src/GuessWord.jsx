import GuessLetter from "./GuessLetter";

function GuessWord (props) {
  const word = props.guess;
  return (
    <ul>
      {Array.from(word).map((letter, index) => (
        <li key={index}>
          <GuessLetter letter={letter} />
        </li>
      ))}
    </ul>
  )
}

export default GuessWord;