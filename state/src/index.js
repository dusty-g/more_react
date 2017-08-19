import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

let names = ["One", "Two", "Three", "Four"]
class Details extends React.Component{
  render(){
    return (
      <h1>{this.props.details}</h1>
    )
  }
}

class Button extends React.Component{
  

  render(){
    return (
      <button style = {{color: this.props.active? "blue": "red"}} onClick={()=>{this.props.clickHandler()}}>{this.props.name}</button>
    )
  }
}



// let buttons = []
// for(let i = 0; i < names.length; i++){
//   buttons.push(<Button name= {names[i]} id={i} key={i}/>)
// }

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {activeArray:[0,0,0,0]}
    
  }
  clickHandler(id, details){
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArray:arr, details:details})
    console.log(id, details)
  }
  render(){
    let buttons = names.map((el, i)=>{
      return (
        <Button name= {names[i]} id={i} active={this.state.activeArray[i]} key={i} clickHandler={()=>{this.clickHandler(i, names[i])}}/>
      )
    })
    return (
      <div>
        {buttons}
        <Details details={this.state.details}/>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
