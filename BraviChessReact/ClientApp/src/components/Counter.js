import React, { Component } from 'react';
import '../components/chessboard.css'

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.positionMarked = {};
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  handleClick(e) {
    for (let i = 0; i < this.positionMarked.length; i++) {
      document.getElementById(this.positionMarked[i]).style.color = "black";
    }

    fetch('api/KnightMovement/Teste?position=' + e.target.getAttribute('id'))
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
        for (let i = 0; i < data.length; i++) {
          document.getElementById(data[i]).style.color = "red";
        }
        this.positionMarked = data;
      });
  }

  render() {
    return (
      <div>
        <h1>Bravi Chess</h1>
        <div className="chessboard">
          <div className="white" id="A8" onClick={e => this.handleClick(e)}>A8</div>
          <div className="black" id="B8" onClick={e => this.handleClick(e)}>B8</div>
          <div className="white" id="C8" onClick={e => this.handleClick(e)}>C8</div>
          <div className="black" id="D8" onClick={e => this.handleClick(e)}>D8</div>
          <div className="white" id="E8" onClick={e => this.handleClick(e)}>E8</div>
          <div className="black" id="F8" onClick={e => this.handleClick(e)}>F8</div>
          <div className="white" id="G8" onClick={e => this.handleClick(e)}>G8</div>
          <div className="black" id="H8" onClick={e => this.handleClick(e)}>H8</div>

          <div className="black" id="A7" onClick={e => this.handleClick(e)}>A7</div>
          <div className="white" id="B7" onClick={e => this.handleClick(e)}>B7</div>
          <div className="black" id="C7" onClick={e => this.handleClick(e)}>C7</div>
          <div className="white" id="D7" onClick={e => this.handleClick(e)}>D7</div>
          <div className="black" id="E7" onClick={e => this.handleClick(e)}>E7</div>
          <div className="white" id="F7" onClick={e => this.handleClick(e)}>F7</div>
          <div className="black" id="G7" onClick={e => this.handleClick(e)}>G7</div>
          <div className="white" id="H7" onClick={e => this.handleClick(e)}>H7</div>

          <div className="white" id="A6" onClick={e => this.handleClick(e)}>A6</div>
          <div className="black" id="B6" onClick={e => this.handleClick(e)}>B6</div>
          <div className="white" id="C6" onClick={e => this.handleClick(e)}>C6</div>
          <div className="black" id="D6" onClick={e => this.handleClick(e)}>D6</div>
          <div className="white" id="E6" onClick={e => this.handleClick(e)}>E6</div>
          <div className="black" id="F6" onClick={e => this.handleClick(e)}>F6</div>
          <div className="white" id="G6" onClick={e => this.handleClick(e)}>G6</div>
          <div className="black" id="H6" onClick={e => this.handleClick(e)}>H6</div>

          <div className="black" id="A5" onClick={e => this.handleClick(e)}>A5</div>
          <div className="white" id="B5" onClick={e => this.handleClick(e)}>B5</div>
          <div className="black" id="C5" onClick={e => this.handleClick(e)}>C5</div>
          <div className="white" id="D5" onClick={e => this.handleClick(e)}>D5</div>
          <div className="black" id="E5" onClick={e => this.handleClick(e)}>E5</div>
          <div className="white" id="F5" onClick={e => this.handleClick(e)}>F5</div>
          <div className="black" id="G5" onClick={e => this.handleClick(e)}>G5</div>
          <div className="white" id="H5" onClick={e => this.handleClick(e)}>H5</div>

          <div className="white" id="A4" onClick={e => this.handleClick(e)}>A4</div>
          <div className="black" id="B4" onClick={e => this.handleClick(e)}>B4</div>
          <div className="white" id="C4" onClick={e => this.handleClick(e)}>C4</div>
          <div className="black" id="D4" onClick={e => this.handleClick(e)}>D4</div>
          <div className="white" id="E4" onClick={e => this.handleClick(e)}>E4</div>
          <div className="black" id="F4" onClick={e => this.handleClick(e)}>F4</div>
          <div className="white" id="G4" onClick={e => this.handleClick(e)}>G4</div>
          <div className="black" id="H4" onClick={e => this.handleClick(e)}>H4</div>

          <div className="black" id="A3" onClick={e => this.handleClick(e)}>A3</div>
          <div className="white" id="B3" onClick={e => this.handleClick(e)}>B3</div>
          <div className="black" id="C3" onClick={e => this.handleClick(e)}>C3</div>
          <div className="white" id="D3" onClick={e => this.handleClick(e)}>D3</div>
          <div className="black" id="E3" onClick={e => this.handleClick(e)}>E3</div>
          <div className="white" id="F3" onClick={e => this.handleClick(e)}>F3</div>
          <div className="black" id="G3" onClick={e => this.handleClick(e)}>G3</div>
          <div className="white" id="H3" onClick={e => this.handleClick(e)}>H3</div>

          <div className="white" id="A2" onClick={e => this.handleClick(e)}>A2</div>
          <div className="black" id="B2" onClick={e => this.handleClick(e)}>B2</div>
          <div className="white" id="C2" onClick={e => this.handleClick(e)}>C2</div>
          <div className="black" id="D2" onClick={e => this.handleClick(e)}>D2</div>
          <div className="white" id="E2" onClick={e => this.handleClick(e)}>E2</div>
          <div className="black" id="F2" onClick={e => this.handleClick(e)}>F2</div>
          <div className="white" id="G2" onClick={e => this.handleClick(e)}>G2</div>
          <div className="black" id="H2" onClick={e => this.handleClick(e)}>H2</div>

          <div className="black" id="A1" onClick={e => this.handleClick(e)}>A1</div>
          <div className="white" id="B1" onClick={e => this.handleClick(e)}>B1</div>
          <div className="black" id="C1" onClick={e => this.handleClick(e)}>C1</div>
          <div className="white" id="D1" onClick={e => this.handleClick(e)}>D1</div>
          <div className="black" id="E1" onClick={e => this.handleClick(e)}>E1</div>
          <div className="white" id="F1" onClick={e => this.handleClick(e)}>F1</div>
          <div className="black" id="G1" onClick={e => this.handleClick(e)}>G1</div>
          <div className="white" id="H1" onClick={e => this.handleClick(e)}>H1</div>
        </div>
      </div>
    );
  }
}
