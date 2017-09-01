import React, { Component } from 'react';
import {shuffle} from "underscore"
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
function Score(props){
  return (
    <div style={{display: "inline-block"}}>
    <h2>Correct: {props.correct}</h2>
    <h2>Incorrect: {props.incorrect}</h2>
    </div>
  )
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
    this.state = {key:key, correct:0, incorrect:0, current:current, questions: questions, answers: answers}
  }
  makeButtons(ansList){

    let output = []
    for(let i = 0; i<ansList.length;i++){
      output.push(<Button key={i} id={i} answer = {ansList[i]} click= {this.buttonClick}/>)
    }
    return shuffle(output)
  }
  buttonClick(key){
    console.log(key)
    if(key === this.state.key[this.state.current]){
      console.log(this.state)
      this.setState((prevState, props)=>{
        {prevState.correct++}
      })
    }else{
      this.setState((prevState, props)=>{
        {prevState.incorrect++}
      })
    }
        this.setState((prevState, props)=>{
          {prevState.current++}
        })
  }
  render() {
    let buttons;
    if(this.state.current >= this.state.questions.length){
      return(
        <div>
        <h1>end</h1>
        <Score correct={this.state.correct} incorrect={this.state.incorrect}/>
        </div>
      )
    }else{

       buttons = this.makeButtons(this.state.answers[this.state.current])
    }
    return (
      <div>
        <div style={{display: "inline-block", width:"65%"}}>
        {this.state.questions[this.state.current]}
        {buttons}
        
        </div>
        <Score correct={this.state.correct} incorrect={this.state.incorrect}/>
      </div>
    );
  }
}

export default App;
