import React, { Component } from 'react';
import './App.css';

// function Hello_world(props){
//   return(

//     <div id= "hello"> 
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   );
// }

class Hello_world extends React.Component{

  state = {
    show: true
  }

  render(){
    if (this.state.show){
      return(
        <div id= "hello"> 
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={() => this.setState({show: false})}>Cambiar estado</button>
        </div>
      );
    } else{
      return (
        <h1> 
          No hay elementos
          <button onClick={() => this.setState({show: true})}>Cambiar estado</button>
        </h1>

      );
    }

  }
}



function App() {
  return (
    <div>this is my component: 
      <Hello_world mytext="Hello enzo" subtitle="subtitulo 1"/>  
      <Hello_world mytext="Hello Javier" subtitle="subtitulo 2"/>  
      <Hello_world mytext="Hello Maria" subtitle="subtitulo 3"/>  
    </div>
  );
}

export default App;
