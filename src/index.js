import React from 'react'
import ReactDom from 'react-dom'

function Cartoon(props){
  return <h1> Hello , {props.name} on {props.show} </h1>
 }

 function Show(){
   return <div>
     <Cartoon name='Tom' show='Tom and jerry'/>
     <Cartoon name='Jack' show='Jack and Jill' />
   </div>
 }

 class Car extends React.Component{
  render(){
    return <h1>Car componets value {this.props.name} </h1>
  }
}

 ReactDom.render(
  <Show />,
  document.getElementById('root')
);
