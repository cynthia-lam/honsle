function Input(props) {
  const onSubmit = props.onSubmit;
  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <label>Guess:</label>
        <input />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
