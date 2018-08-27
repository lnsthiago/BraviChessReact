The project was created using React in front-end and .net core in back-end.

React:
I created two screen, one of them to show the information from Readme. The other one shows the chess board with its coordinates. Once a coordinate is clicked a request is made in the React's component to the API, as soon as it receives the response, it highlights in red the next possible turns.

.Net Core:

It receives the requested position from the knight, processes it and returns a list of the next possible turns. Some tests have been developed to cover the code.

Some further development I wanted to do:
 - A more dynamic board with React
 - Persist the requests in some database
 - Split front and back
