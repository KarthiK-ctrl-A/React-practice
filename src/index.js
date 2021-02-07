import React from 'react'
import ReactDom from 'react-dom'

class Clock extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      date : new Date()
    }
  }

  componentDidMount(){

      this.timer = setInterval(() => this.start(),1000);
  }

  componentWillUnmount(){

    clearInterval(this.timer);

  }

  start(){

    this.setState({
      date : new Date()
    });

  }

  render(){
    return <h1>
      Time now : {this.state.date.toLocaleTimeString()}
    </h1>
  }

}

ReactDom.render(

  <Clock />,
  document.getElementById('root')

);
 
