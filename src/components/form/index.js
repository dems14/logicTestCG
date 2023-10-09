import React, { useState } from 'react';
import PositiveIntegerInput from "../inputs/"
import ValidateInputs from "../inputs/validateInput"
import * as logic from '../logic/logic';
import Table from '../table';

function Form() {
  const [x_value, setValueX] = useState('');
  const [y_value, setValueY] = useState('');
  const [z_value, setValueZ] = useState('');
  const [message, setMessage] = useState('');
  const [error, raiseError] = useState(false);
  const validArray = [x_value, y_value, z_value];
  const [answer, setAnswer] = useState([]);

  const handleChangeX = (event) => {
    setValueX(event.target.value);
  };

  const handleChangeY = (event) => {
    setValueY(event.target.value);
  };

  const handleChangeZ = (event) => {
    setValueZ(event.target.value);
  };

  const renderError = () => {
    if (error)
      return <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>
  }

  const solution = () => {
    let valid = ValidateInputs(validArray, setMessage);
    if (valid) {
      raiseError(true);
    } else {
      setMessage('');
      raiseError(false);

      const MAX_LARGE = parseInt(x_value) > parseInt(y_value) ? parseInt(x_value) : parseInt(y_value);
      const MAX_SMALL = parseInt(x_value) < parseInt(y_value) ? parseInt(x_value) : parseInt(y_value);
      const Target = parseInt(z_value);

      let start = { small: 0, large: 0 };
      let smallPath = logic.smallPath(start, Target, MAX_SMALL, MAX_LARGE);

      start = { small: 0, large: 0 };
      let largePath = logic.largePath(start, Target, MAX_SMALL, MAX_LARGE);

      console.log(smallPath, largePath, "testing");

      let bestResult = smallPath.length < largePath.length ? smallPath : largePath;

      let flag = false;
      bestResult.forEach((element) => {
        if (element.large === parseInt(z_value) || element.small === parseInt(z_value)) {
          element.message += " SOLUTION";
          flag = true;
        }
      });

      if (!flag) {
       bestResult = "NO SOLUTION"
      }

      setAnswer(bestResult);
      //alert(`work in progress X: ${x_value} Y: ${y_value} Z: ${z_value}`);
    }
  }
  return (
    <div>
      X <PositiveIntegerInput value={x_value} setValue={handleChangeX} /> <br />
      Y <PositiveIntegerInput value={y_value} setValue={handleChangeY} /> <br />
      Z <PositiveIntegerInput value={z_value} setValue={handleChangeZ} /> <br />

      <button onClick={() => { solution() }}>SOLVE</button>
      {renderError()}

      {answer === 'NO SOLUTION' && <p>{answer}</p>}
      {answer !== 'NO SOLUTION' && <Table path={answer} />}
    </div>
  );
}

export default Form;