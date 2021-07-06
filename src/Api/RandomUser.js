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



// async adelante de una funcion hace que esa funcion se ejecute en paralelo a otras. La linea 10 no se va a ejecutar hasta que la linea 9 no se haya ejecutado. Llamando al async, lo que hago es decirle a la funcion getData que sea asincronica. Esto siginifica que se ejecute, y que lo venga despues se siga ejecutando. Le indica que no le frene la siguiente ejecucion aunque la primera este tardando mucho. 

// getData se llama la funcion. Tiene un parametro q que es la cantidad de tarjetas que queremos que nos traiga. Vas a hacer un fetch a la API para pedirle la cantidad de tarjetas. 

//Como lo que me trae es una respuesta compleja, queremos un json porque hay cosas que vienen en el fetch que no me interesan. Lo unico que queres devolver es el del objeto json, los results, que son las tarjetas en si, la informacion de las personas. Haces un json, te queda mas lindo para trabajarlo, y de todo lo que te viene de la API, solo queres el results. El results es un array de personas, cada una con sus propiedades. La cantidad de personas que nos va a traer va a depender del valor del parametro q dentro de la funcion getData.

//Siempre vamos a mostrar 1 tarjeta, vos le das like o dislike y seguis. En las pantallas de like o dislikes vamos a tener todas las tarjetas guardadas o eliminadas. Pero ahi ya no estan traidas de la API, estan guardadas en el async storage, y nosotros las vamos a visualizar ahi.

//En el catch podriamos poner un alert de que no se pudo encontrar el contacto. Pusimos un console.log para que nos salte error ahi y entender que pasa. Un ejemplo es que la pagina de la API este caida, ahi va a ir al catch directo. Porque la funcion estaria haciendo un fetch a una pagina que esta caida y no va a obtener la informacion deseada. 


// el await espera a que se cumpla y se resuelva la promesa. seria el then que usabamos antes en React. cuando se resuelva lo va a guardar en la variable resultado. (Ahora espera a que esto se ejecute para seguir ejecutando el programa) .Lo que vamos a guardar es el fetch mas la cantidad de tarjetas que deseamos obtener.







