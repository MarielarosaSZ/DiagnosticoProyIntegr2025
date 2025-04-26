// Definir el array de números  
const numeros = [3, 7, 12, 5, 2];  

// Usar map para generar un nuevo array con los números al cuadrado  
const cuadrados = numeros.map(num => num ** 2);  

// Usar filter para obtener los números mayores a 5  
const mayoresQueCinco = numeros.filter(num => num > 5);  

 

// Resultado  
console.log('Números al cuadrado:', cuadrados);               // [9, 49, 144, 25, 4]  
console.log('Números mayores a 5:', mayoresQueCinco);        // [7, 12]  
  