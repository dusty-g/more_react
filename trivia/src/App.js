import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props){
  return (
    <button id = {props.id} onClick={()=>props.click(props.id)}>{props.answer}</button>
  )
}

class Question extends Component{
  render(){
    return (
      <h1 className="question">{this.props.question}</h1>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    var questions = ["what is 3 x 3", "what is the capitol of idaho", "what is 3+3"]
    var answers = [["1", "9", "12", "10"],["detroit", "phoenix", "boise"],["6", "2", "1"]]
    var key = [1,2,0]
    var current = 0
    questions = questions.map((question)=>{
      return (<Question question = {question} />)
    })
    this.buttonClick = this.buttonClick.bind(this)
    this.state = {key:key, correct:0, incorrect:0, current:current, question: questions[current], answers: answers[current]}
  }
  makeButtons(ansList){
    let output = []
    for(let i = 0; i<ansList.length;i++){
      output.push(<Button key={i} id={i} answer = {ansList[i]} click= {this.buttonClick}/>)
    }
    return output
  }
  buttonClick(key){
    console.log(key)
  }
  render() {
    let buttons = this.makeButtons(this.state.answers)
    return (
      <div>
      {this.state.question}
      {buttons}
      </div>
    );
  }
}

export default App;
