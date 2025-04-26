import React from 'react';  

// Componente Saludo  
const Saludo = ({ nombre }) => {  
  return (  
    <div>  
      <h1>¡Hola, {nombre}!</h1>  
    </div>  
  );  
};  

// Componente principal para pruebas  
const App = () => {  
  return (  
    <div>  
      <Saludo nombre="Martín" />  
    </div>  
  );  
};  

export default App;  