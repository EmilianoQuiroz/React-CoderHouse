//--- JSX Y WEBPACK ---//

//--- SUGAR SYNTAX ---//
/*
Sugar Syntax refiere a la sintaxis agregada a un lenguaje de programación con el objetivo de hacer más fácil y eficiente su utilización. Favorece su escritura, lectura y comprensión.
*/

//--- ¿POR QUÉ EXISTE EL SUGAR-SYNTAX? ---//
/*
Causas principales:

-Críticas de la comunidad.
-Grado de adoptabilidad.
-Dificultad de implementar patrones de diseño comunes en otros lenguajes.
*/

//--- POLYFILLS Y LA RETROCOMPATIBILIDAD ---//
/*
Cuando desarrollemos y pensemos la experiencia de nuestras aplicaciones, es importante tener en cuenta qué distribución tiene hoy el mundo, así como nuestro target de usuarios.
*/

//--- BUNDLING CON WEBPACK ---//
/*
Webpack es un module bundler o empaquetador de módulos que nació a finales de 2012, y en la actualidad es utilizado por miles de proyectos de desarrollo web Front-End. 

Incluido desde React o Angular hasta en el desarrollo de aplicaciones conocidas como Twitter, Instagram, PayPal, o la versión web de Whatsapp.
*/
//--- ¿CÓMO FUNCIONA? ---//
/*
Podemos tener, por ejemplo, un módulo JS que vaya a depender de otros módulos .js, con imágenes en diferentes formatos como JPG o PNG. O estar utilizando algún preprocesador de CSS, como puede ser SASS, Less y Stylus. 
Webpack recoge todos estos módulos y los transforma a assets que puede entender el navegador, como por ejemplo archivos JS, CSS, imágenes, videos, etc.
*/
//--- ¿CÓMO NOS AFECTA EN NUESTRO DESARROLLO? ---//
/*
Internamente está incluido en la aplicación generada por create-react-app.
Importante: el equipo de react es quien se encarga de mantener estas configuraciones actualizadas.
Podemos modificarlas, pero para eso necesitamos realizar un eject.
*/
//--- ¿EJECT? ---//
/*
Es una acción permanente, que permite tener un control más específico del bundling, a costa de que de ahora en adelante tendremos que encargarnos de mantenerlo.
*/
//--- COSTO Y ALTERNATIVAS ---//
/*
En algunas oportunidades, cuando tengamos más experiencia, nos puede dar más flexibilidad, pero no siempre es el caso. Hay algunos proyectos que dan alternativas, como rewired.
*/

//--- TRANSPILING ---//
/*
¿QUÉ ES EL TRANSPILING?

Es el proceso de convertir código escrito en un lenguaje, a su representación en otro lenguaje. Usualmente extienden o simplifican la escritura del lenguaje, o representación original.

-Implementan un proceso similar conceptualmente al pollyfilling.
-Logran niveles de simetricidad y simbiosis con el lenguaje original.
*/

//--- JSX ---//
/*
¿QUÉ ES Y POR QUÉ LO USAMOS?

javascript xml

JSX es una extensión de sintaxis de Javascript que se parece a HTML

Oficialmente, es una extensión que permite hacer llamadas a funciones y a construcción de objetos. No es ni una cadena de caracteres, ni HTML.

JSX es una extensión de Javascript, no de React. 

Esto significa que no hay obligación de utilizarlo, pero es recomendado en el sitio web oficial de React. 
*/

//--- FUNCIONAMIENTO Y CARACTERÍSTICAS ---//
/*
¿CÓMO FUNCIONA?
JSX se transforma en código JavaScript.

Esto nos da algunas ventajas, como ver errores en tiempo de compilación, asignar variables, retornar métodos, etc.
*/

//--- STYLING EN JSX ---//
/*
Es posible definir y utilizar estilos inline en JSX, solo necesitamos convertirlos por convención:

border-color => borderColor
padding-top => paddingTop
‘10px’ => 10 (no es necesario el px)
*/

//--- INLINE STYLES EN JSX ---//
/*
Los mismos estilos se pueden configurar inline en JSX, solo necesitamos usar doble llave {{ }},
La primera llave para avisar que se agregará un objeto en js.
La segunda llave para empezar a escribir el objeto en sí.
*/

//--- REGLAS GENERALES ---//
/*
-Los elementos deben ser balanceados. Por cada apertura debe haber un cierre.

<img src=””> Mal
<img src=””></img> Es mejorable



-Si el elemento no tiene hijos, debe idealmente ser auto-cerrado

<img src=”” /> Ideal

-Class es palabra reservada, en su lugar usar className. 

<img src=”” class=”my-class” /> Mal
<img src=”” className=”my-class” /> Ok
*/

//--- CAMELCASE ---//
/*
En JSX se utilizan tanto los estilos como los eventos estándar del DOM, como onclick, onchange, onkeydown, etc. pero utilizando camelCase: onClick, onChange, onKeyDown / marginTop, paddingBottom, etc.
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const mensaje = 'Bienvenido a React'
  const estilos = {
    background: '#888',
    padding: '20px'
  }
  return (
    <div className='container'>
      <h1>Hola React</h1>
      <strong>Otro mensaje</strong>
      <h3 style={ estilos }>{ mensaje }</h3>
    </div>
  );
}

export default App;