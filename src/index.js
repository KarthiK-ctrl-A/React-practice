import React from 'react'
import ReactDom from 'react-dom'

class Inc extends React.Component{

  constructor(props){
    super(props);
    this.state = {counter : 0}
  }

increment = (e) => {
  e.preventDefault();
  this.setState({
    counter : this.state.counter + 1 
  });
}

render(){

    return <button onClick = {this.increment}>
                value is {this.state.counter}
            </button>
 }
}

ReactDom.render(

  <Inc />,
  document.getElementById('root')

);
 
