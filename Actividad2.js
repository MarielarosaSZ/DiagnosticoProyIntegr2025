// Definir el objeto persona  
const persona = {  
    nombre: "Lucía",  
    edad: 28,  
    profesion: "Diseñadora",
    ciudad: "Rosario",  
  };  
  
  // Desestructuración del objeto persona  
  const { nombre, edad, profesion, ciudad } = persona;  
  
  // Mostrar el mensaje en consola  
  console.log(`${nombre} tiene ${edad} años y trabaja como ${profesion}. Vive en ${ciudad}`);  