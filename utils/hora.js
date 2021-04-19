export const hora  = () => {
  var hoy = new Date()
  var hora = hoy.getHours()
  console.log(hora)
  if(hora >= 6 && hora <= 12){

    return('Buenas Días')
  }
  else if(hora >= 13 && hora <= 19 ){
    return('Buenas Tardes')
  }
  else {
    
    return('Buenas Noches')
    
  }
}