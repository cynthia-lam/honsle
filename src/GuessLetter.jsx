import "./styles/GuessLetter.css"

function GuessLetter(props) {
  const letter = props.letter;
  const index = props.index;
  console.log(`index is: ${index}`);
  

  function colour(letter, index) {  
    switch (true) {
      case index === 0 && letter === 'h':
        return 'green';
      case index === 1 && letter === 'o':
        return 'green';
      case index === 2 && letter === 'n':
        return 'green';
      case index === 3 && letter === 's':
        return 'green';
      case index === 4 && letter === 'e':
        return 'green';
      case 'honse'.includes(letter):
        return 'yellow';
      default:
        return 'black';
    }
  }

  return (
    <div className={`guessLetter ${colour(letter, index)}`}>
      {letter}
    </div>
  )
}

export default GuessLetter;