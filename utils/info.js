import fs from 'fs'
;export const info = (async () => {
  try {
      //Leo un archivo en forma asincrónica
      let datos = await fs.promises.readFile('./package.json','utf-8')
      //Archivo = obj
      const objPackage = JSON.parse(datos)
      //Tamaño del Archivo
      var archivo = fs.statSync('./package.json')
      var archivoByte = archivo["size"]
      // Construccion del obj info
      let info = {
        contenidoStr: datos,
        contenidoObj: objPackage,
        size: archivoByte
      }
      // visualizacion del obj en consola
      console.log(info)
      //Formateo del obj info
      let data = JSON.stringify(info, null, 2)
      // generacion del archivo con formato
      await fs.promises.writeFile('info.txt', data)
      
  }
  catch(error) {
      console.log(`Error en operación asincrónica de fs: ${error}`)
  }
})()