export async function getData(q) {
    try {
        let resultado = await fetch("https://randomuser.me/api/?results=" + q);
        let json = await resultado.json();
        // console.log(json)
        return json.results;
    } catch(e) {
        console.log(e);
    }
}

/* Ahora definimos la función con async debido a que vamos a realizar un llamado asincrónico
La instruccion await va a esperar que la promesa (respuesta) se resuelva (lo procesa )y
 cuando se resuelva   lo va a guardar en la variable resultado. lo que vamos a guardar es el fetch mas la cantidad
 de tarjetas que deseamos obtener.
 El json devuelve una promesa, entonces antepongo el await para procesasr las promesa  y
  luego el resultado de la promesa va a ser guardado en un json.
  de que me sirve guardar la variable en el json ?
   Cuando lo obtengo ya puedo devolver el valor sin inconvenientes.  */