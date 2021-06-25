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

//Try catch lo que hace es: intenta resolverme esta porción de código (la que está entre llaves). En caso de que funcione perfecto, y en caso de que falle, agarra el error y nosotros podemos guardarlo, imprimirlo, o no hacer nada simplemente

/* Ahora definimos la función con async debido a que vamos a realizar un llamado asincrónico
La instruccion await va a esperar que la promesa (respuesta) se resuelva (lo procesa) y
 cuando se resuelva lo va a guardar en la variable resultado. (Ahora espera a que esto se ejecute para seguir ejecutando el programa) .Lo que vamos a guardar es el fetch mas la cantidad de tarjetas que deseamos obtener.
 El json devuelve una promesa, entonces antepongo el await para procesasr las promesa  y
  luego el resultado de la promesa va a ser guardado en un json.
   Cuando lo obtengo ya puedo devolver el valor sin inconvenientes.  */

   /* En este caso, como esa respuesta que yo obtengo es compleja, solamente quiero obtener el json del resultado.

Ese método json también devuelve una promesa, entonces tengo que procesarlo de la misma manera, por eso tengo que volver a aplicar el then. 
Obtengo ese json que procese antes, y le paso la parte de resultados, que es lo que me interesa. */

//A diferencia de las páginas web donde no se podía almacenar información local, sino que necesitábamos un equipo remoto con una base de datos. En las aplicaciones para dispositivos móviles podemos almacenar información tanto de forma local, como de forma remota.



