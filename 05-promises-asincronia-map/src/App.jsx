import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App(props) {
  const [counter, setCounter] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log("Promises...")

    const getProducts = new Promise((resolve, rejet) => {
      const rand = Math.random()
      console.log(rand)
      if (rand > 0.5){
        resolve(["mouse", "teclado", "CPU"])
      }else{
        rejet("Promesa rechazada")
      }
      //resolve(["mouse", "teclado", "CPU"])
      rejet("Promesa rechasada")
    })

    getProducts
      .then( (data) => { console.log(data)
      setProducts(data)
      })
      .catch(err => {console.log(err)})
      .finally(() => {console.log("finally siempre sucede")})
  }, [])

  return <div className="container">
    {products.map(p => <div className='bg-orange-500 my-2'>{p}</div>)}
  </div>;
}

export default App;

//--- PROMISES, ASINCRONÍA Y MAP ---//
//--- PROMISE ---//
/*
JavaScript tiene una API que nos permite crear y ejecutar distintas operaciones o conjuntos de operaciones. 

Una promise (promesa en castellano) es un objeto que permite representar y seguir el ciclo de vida de una tarea/operación (función).

En contra de lo que se suele pensar, la sincronicidad o asincronicidad de una promise depende de qué tarea le demos.


Por defecto y diseño,
lo único que ocurre de manera asincrónica es la entrega del resultado.
*/

//--- GARANTÍAS DE UNA -PROMISE ---//
/*
-Las funciones callback nunca serán llamadas previo a la terminación de la ejecución actual del bucle de eventos en JavaScript.

-Las funciones callback añadidas con .then serán llamadas después del éxito o fracaso de la operación
*/

//--- MAP ---//
/*
El método map() nos permite generar un nuevo array tomando de base otro array y utilizando una función transformadora.
Es particularmente útil para varios casos de uso.

En react, con el método map, podremos hacer render de una colección de objetos.

Idealmente debemos incluir en cada elemento la propiedad 
key, que marque la identidad del elemento. Esto ayudará a react a optimizar el rendering ante cambios en el array.
*/