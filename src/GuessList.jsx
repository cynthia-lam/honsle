import GuessLetter from "./GuessLetter";

function GuessList (props) {
  const guess = props.guess;
  return (
    <>
    <ul>
      {/* <li><GuessLetter/></li> */}
      <li>{guess}</li>
    </ul>
    </>
  )
}

export default GuessList;