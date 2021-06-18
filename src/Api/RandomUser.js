 /*export async function getData(){
     Ahora definimos la función con async debido a que vamos a realizar un llamado asincrónico 
    try {
        let resultado= await fetch ('https://randomuser.me/api?results=20');
         La instruccion await va a esperar que la promesa (respuesta) se resuelva (lo procesa )y 
        cuando se resuelva la  lo va a guardar en la variable 
        let json = await resultado.json ()
         El json devuelve una promesa, entonces antepongo el await y luego el resultado de la promesa va
         a ser guardado en un json. Cuando lo obtengo ya puedo devolver el valor sin inconvenientes.
return json.results; 
}catch (error) {
Console.error(error);
}
};

  
 con el async es para almacenar en el dispositivo no es para hacer un fetch en si 
 */