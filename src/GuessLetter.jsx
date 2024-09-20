import "./styles/GuessLetter.css"

function GuessLetter (props) {
  const letter = props.letter;
  return (
    <div className="guessLetter">
      {letter}
    </div>
  )
}

export default GuessLetter;