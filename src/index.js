import React from 'react'
import ReactDom from 'react-dom'

setInterval(function(){

  ReactDom.render(
    <h2>Time Now: {new Date().toLocaleTimeString()}</h2> ,
    document.getElementById('root')
  );
},1000);

