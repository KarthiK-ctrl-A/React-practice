import React from 'react'
import ReactDom from 'react-dom'

function Message(props){
  if(props.value){
   return <h1>This is the first message</h1>
  }
  return <h1>This is the Second message</h1>
}
class Btn extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:true}
  }

  handleClcik = () =>{
    this.setState({
      value : !this.state.value
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClcik}>Change the message</button>
        <Message value={this.state.value}/>
      </div>
    );
  }
}

ReactDom.render(

  <Btn />,
  document.getElementById('root')

);
 
