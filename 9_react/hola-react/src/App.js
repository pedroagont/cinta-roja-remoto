import React from 'react';
import HolaMundo from './components/HolaMundo';

function App() {
  const nombre = "Pedro";
  const apellido = "González";

  const mostrarNombre = () => {
    return (
      <h2>Mi nombre es: {nombre}</h2>
    )
  }

  const mostrarLorem = () => {
    return (
      <h2>Lorem ipsum dolor si amet</h2>
    )
  }

  return (
    <React.Fragment>
      <h1>Hola Mundo!</h1>
      <p>{`Soy ${nombre} ${apellido}`}</p>
      <div>
        {mostrarNombre()}
        {mostrarLorem()}
      </div>
      <HolaMundo />
    </React.Fragment>
  );
}

export default App;
