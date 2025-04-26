// Definición de la función procesar  NO FUNCIONA
const procesar = (array, callback) => {  
    // Usar map para aplicar el callback a cada elemento del array  
    return array.map(callback);  
  };  
  
  // Ejemplo de uso  
  const resultado = procesar([1, 2, 3], x => x * 2);  
  console.log(resultado); // [2, 4, 6]  