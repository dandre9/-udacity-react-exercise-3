import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    proposedAnswer: Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3,
    numQuestions: 0,
    numCorrect: 0
    */

class App extends Component {
  state = {
  	value1: 0,
    value2: 0,
    value3: 0,
    proposedAnswer: 0,
    numQuestions: 0,
    numCorrect: 0
  }

  startGame = () => { 
    this.rollValues();
    
    this.setState({
      numQuestions: 0,
      numCorrect: 0
    });
  }

  rollValues = () => {
      let { value1, value2, value3, proposedAnswer } = this.state;    
      
      value1 = Math.floor(Math.random() * 100);
      value2 = Math.floor(Math.random() * 100);
      value3 = Math.floor(Math.random() * 100);
      proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    
      this.setState({
      	value1,
        value2,
        value3,
        proposedAnswer
      });
  }

  checkAnswer = (answer) => {
  	let { value1, value2, value3, proposedAnswer, numCorrect, numQuestions } = this.state;
    const sum = value1 + value2 + value3;
    
    if((sum === proposedAnswer && answer) || (sum !== proposedAnswer && !answer)){
    	numCorrect += 1;
    }
    
    this.setState({
    	numCorrect,
      	numQuestions: numQuestions + 1
    })   
    
    this.rollValues();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)} >True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
		  <button onClick={this.startGame}>Start</button>
        </div>
      </div>
    );
  }
}

export default App;
