function Input(props) {
  const onSubmit = props.onSubmit;
  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <label>Guess:</label>
        <input type="text" maxlength="5" pattern="[A-Za-z]*"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
