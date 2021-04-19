export const random  = () => {
  var numeros = [];
  for (let i = 1; i <= 10; i++)
  {  
    numeros.push(Math.floor((Math.random() * (20 - 1 + 1)) + 1))
  }
  console.log(numeros)
  
  var repetidos = {}
  
  numeros.forEach((numero) => repetidos[numero] = (repetidos[numero] || 0) + 1)
  return repetidos
}