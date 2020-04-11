import React, { Component } from 'react';

class HolaMundo extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Hola Mundo desde el componente!</h2>
        <p>Soy otro elemento dentro de un mismo nodo :D</p>
      </React.Fragment>
    );
  }
}

export default HolaMundo;
