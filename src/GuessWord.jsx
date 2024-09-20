import GuessLetter from "./GuessLetter";
import "./styles/GuessWord.css";

function GuessWord(props) {
  const word = props.guess;
  return (
    <div className="guessWord">
      {Array.from(word).map((letter, index) => (
        <div key={index}>
          <GuessLetter letter={letter} />
        </div>
      ))}
    </div>
  );
}

export default GuessWord;