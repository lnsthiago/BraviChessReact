import React, { Component } from 'react';

export class Help extends Component {
  displayName = Help.name

  render() {
    return (
      <div>
        <h1>Hello, people!</h1>

        <p>The project was created using React in front-end and .net core in back-end.</p>
        <ul>
          <li><strong>React:</strong> I created two screen, one of them to show the information from Readme. The other one shows the chess board with its coordinates. Once a coordinate is clicked a request is made in the React's component to the API, as soon as it receives the response, it highlights in red the next possible turns.</li>
          <li><strong>.net Core:</strong> It receives the requested position from the knight, processes it and returns a list of the next possible turns. Some tests have been developed to cover the code.</li>
        </ul>
      <br/>
      <p>Some further development I wanted to do:</p>
      <ul>
        <li>A more dynamic board with React</li>
        <li>Persist the requests in some database</li>
        <li>Split front and back</li>
      </ul>
      </div>
    );
  }
}
