function PositiveIntegerInput(props) {

  return (
    <input
      type="text"
      value={props.value}
      onChange={props.setValue}
    />
  );
}

export default PositiveIntegerInput;