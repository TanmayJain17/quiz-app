import React from 'react';
/* import { TextField } from "@material-ui/core"; */

const Start = ({ setName, onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
      
      {/*   <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
           <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Email ID"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          /> */}
       
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;