import express from 'express'
import { suma, resta, mult, div} from './utils/operaciones.js'
import { random } from './utils/random.js'
import { info } from './utils/info.js'
import { hora } from './utils/hora.js'
/* ------------ INSTANCIA DEL SERVIDOR --------------- */
const app = express()
/* ------------ GET Home --------------- */

app.get('/', function(req,res) {
  res.send(hora())
  
})
/* --------- GET RANDOM ------- */
app.get('/random', function(req,res) {
  res.json(random())
})
/* --------- GET INFO ------- */
app.get('/info', function(req,res) {
  res.send('<h1>Ruta Info</h1>')
})
/* --------- GET OPERACIONES ------- */
app.get('/operaciones', (req,res) => {
    
  let {num1, num2, operacion} = req.query
  let numA
  let numB
  let resultado 
  if( typeof (num1) !== 'undefined' && typeof (num2) !== 'undefined' && typeof (operacion) !== 'undefined'){
    numA =  parseInt(num1)
    numB = parseInt(num2)
    // convert operacion a function
    resultado = eval(operacion)
    
    //la operacion
    resultado = resultado(numA,numB)
  }  
  // en caso de error
  if(typeof numA !== 'number' || typeof numB !== 'number' || isNaN(resultado))
  {

    res.status(400).json({
      error: {
        num1: { valor: numA, tipo: typeof numA },
        num2: { valor: numB, tipo: typeof numB },
        operacion: { valor: resultado, tipo: typeof resultado }
      }
    })  
  }
  else{
    res.json({
      datos: {
        num1: { valor: numA},
        num2: { valor: numB },
        operacion: { nombre: operacion},
        resultado: {valor: resultado}
      }
    })
  }
  
})
/* --------- Config del puerto ------- */
app.set('PUERTO', 8081)
const PORT = process.env.PORT || app.get('PUERTO')

/* ----------- Listen del servidor ------------------ */
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en Servidor: ${error}`))