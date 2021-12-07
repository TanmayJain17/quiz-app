import React, { useEffect, useState } from 'react';
import { Button } from "@material-ui/core";
import axios from 'axios';

/* import { formatTime } from '../utils'; */

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);
  function onSubmit() {
    
    axios.post('../../score',results)
        .then((response) => {
            console.log(response)
            window.alert(response.message)
        });
}

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          {/* <p><strong>Your time:</strong> {formatTime(time)}</p> */}
          <button className="button is-info mr-2" onClick={onAnswersCheck}>Check your answers</button>
          <button className="button is-success" onClick={onReset}>Try again</button>
          <button className="button is-success" onClick={onSubmit}>Submit</button>
          <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
        </div>
      </div>
    </div>
  );
}

export default End;