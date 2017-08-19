import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {counter: 0, blue: false}
  }

  clickHandler(){
    this.setState((prevState, props)=>{
      return {"counter": prevState.counter + 1, "blue": !prevState.blue }
    })
  }

  render(){
    console.log(this.state)
    
    if (this.state.blue){
      var color = "blue"
    }else{
      var color = "red"
    }
    var divStyle = {
      backgroundColor: color,
      width: "50px",
      height: "50px",
      color: "white",
  
    }
    return <button onClick= {()=>{this.clickHandler()}} style={divStyle} >{this.state.counter}</button>
  }


}
ReactDOM.render(
  <Counter/>,
  document.getElementById("root")
)