# Tutorial React js

## Requerimientos:

conocer aspectos basicos sobre:
- HTML
- CSS
- Javascript

## ¿Que es React js?

**React JS**  es una biblioteca Javascript de código abierto diseñada para crear [interfaces de usuario](https://es.wikipedia.org/wiki/Interfaz_de_usuario "Interfaz de usuario") con el objetivo de facilitar el desarrollo de aplicaciones SPA [(aplicaciones en una sola página)](https://es.wikipedia.org/wiki/Single-page_application "Single-page application"). Para ello, alrededor de React existe un completo ecosistema de módulos, herramientas y componentes capaces de ayudar al desarrollador a cubrir objetivos avanzados con relativamente poco esfuerzo.

Por tanto, React representa una base sólida sobre la cual se puede construir casi cualquier cosa con Javascript. Además facilita mucho el desarrollo, ya que nos ofrece muchas cosas ya listas, en las que no necesitamos invertir tiempo de trabajo.

## Comparación de React con otras librerías o frameworks

Con respecto a librerías sencillas como jQuery, React aporta una serie de posibilidades muy importantes. Al tener las vistas asociadas a los datos, no necesitamos escribir código para manipular la página cuando los datos cambian. Esta parte en librerías sencillas es muy laboriosa de conseguir y es algo que React hace automáticamente.

También en comparación con jQuery nos permite una arquitectura de desarrollo más avanzada, con diversos beneficios como la encapsulación del código en componentes, que nos ofrecen una serie de ventajas más importantes que los plugin, como la posibilidad de que esos componentes conversen e interaccionen entre si, algo que que sería muy difícil de conseguir con Plugins.

No se puede decir de una manera objetiva si es ReactJS es mejor o peor que otras alternativas. Lo cierto es que muchas librerías se especializan en el "data-binding", pero React toma esa misma necesidad y la resuelve de otra manera. La diferencia es que React le pone más inteligencia a la necesidad de actualizar una vista cuando es necesario y lo consigue mediante el "DOM Virtual" o "Virtual DOM".

## Qué es el Virtual DOM

es una de las principales características de React. De momento, en líneas generales podemos decir que el virtual DOM es una representación del DOM pero en memoria, que usa React para aumentar sensiblemente el rendimiento de los componentes y aplicaciones front-end.

El Virtual DOM se basa en una idea bastante sencilla e ingeniosa. Básicamente hace que, cuando se actualiza una vista, React se encargue de actualizar el DOM Virtual, que es mucho más rápido que actualizar el DOM del navegador (DOM real). Cuando React compara el DOM Virtual con el DOM del navegador sabe perfectamente qué partes de la página debe actualizar y se ahorra la necesidad de actualizar la vista entera.

## Herramientas relacionadas:

- React Native : variacion de react para crear aplicaciones moviles nativas
- Next.js : framework del server save rendering
- GraphQL : lenguaje que permite solicitar datos
- Redux : manejador de estados
- MERN : termino que define muchas tecnologias (mongo-express-react-nodejs) para poder crear una aplicacion entera utilizando codigo JavaScript
- Ionic4 : permite crear una aplicacion movil con el mismo codigo de react js

## 1. Instalacion de React js

### 1.1 Instalacion de Nodejs
antes de proceder con la instalacion de React es necesario tener instalado **Nodejs**. Para esto dirigirse al siguiente enlace y seguir las instrucciones segun su sistema operativo:
https://nodejs.org/es/download/ 

### 1.2 Crear proyecto de react js
el siguente codigo instalara lo necesario para crear nuestro primer proyecto de React js

```
npx create-react-app my-app
```
en donde **my-app** es el nombre de nuestro proyecto
esta linea de codigo nos creara una carpeta llamada **my-app** en el directorio donde hayamos corrido el codigo.

al terminar la consola entregara unas lineas como estas:

	Success! Created tutorial_reactjs at /home/enzo/Escritorio/INFO229_2020/tutorial_reactjs
	Inside that directory, you can run several commands:

	  npm start
	    Starts the development server.

	  npm run build
	    Bundles the app into static files for production.

	  npm test
	    Starts the test runner.

	  npm run eject
	    Removes this tool and copies build dependencies, configuration files
	    and scripts into the app directory. If you do this, you can’t go back!

	We suggest that you begin by typing:

	  cd tutorial_reactjs
	  npm start

	Happy hacking!
con algunos comandos muy útiles.


lo siguiente es abrir la carpeta del proyecto con nuestro editor de codigo favorito.

## 2. Iniciar un proyecto

una vez ubicado  dentro de la carpeta del proyecto (my-app) podemos ejecutar el siguiente instruccion en el terminal para iniciar nuestro proyecto:

	npm start 
esto nos abrira en el navegador una pestaña con nuestro proyecto

![enter image description here](https://i.postimg.cc/tJYFnWXr/6.png)
ahora vamos a echar un vistazo de los archivos que nos genero react al momento de crear nuestro proyecto:

![enter image description here](https://i.postimg.cc/rz2zyrzR/7.png)

**README.md** : Básicamente es una nota que le dejamos a otros desarrolladores para que se enteren de que se trata nuestro proyecto. Podríamos poner el nombre de nuestro proyecto, algunos comandos útiles, etc.
**package.json** : Archivo que describe nuestro proyecto, podríamos ver el nombre de nuestro proyecto, la versión, las dependencias, etc. Ademas tendremos una seccion de **Scripts** en donde se encuentran los comandos que podríamos ejecutar en consola como start, build, test, eject.
**package-lock.json**: Archivo de uso interno de react
**.gitignore**: Archivo que sirve para ignorar archivos y/o carpetas al momento de subir nuestro proyecto a repositorios como git.
**./src**: Contiene el código de react (aquí se encuentra nuestra aplicación)
	**App.js**: Contiene codigo JSX. En este archivo tenemos una funcion **APP** que retorna una etiqueta `<div>` donde tenemos lo que queremos imprimir en pantalla (se importa en **index.js** con `import App from  './App';` y se renderiza con `ReactDOM.render()`)
	**index.js**: Archivo encargado de arrancar la aplicacion de React
**./public**: Contiene el archivo que nos permitirá montar la aplicación de react el cual es el archivo **index.html**
	

# 3. Conceptos basicos
## 3.1  Hello world en React

Si bien el ejemplo que nos crea react es muy boniyo, lo mejor para entender react es empezar por el más pequeño de los ejemplos de React, el cual se ve así:

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root') // indica enla etiquet del index.html donde se pintara
);
```
para esto nos dirigimos al archivo **index.js** y modificamos el metodo **ReactDOM**
Este muestra un encabezado con el texto “Hello, world!” en la página.

## 3.2 JSX

Considera la declaración de esta variable:
```
const element = <h1>Hello, world!</h1>;
```
Se llama JSX, y es una extensión de la sintaxis de JavaScript. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.

### 3.2.1 Insertando expresiones en JSX

En el ejemplo a continuación, declaramos una variable llamada `name` y luego la usamos dentro del JSX envolviéndola dentro de llaves:

```
const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Puedes poner cualquier [expresión de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators) dentro de llaves en JSX. Por ejemplo, `2 + 2`, `user.firstName`, o `formatName(user)` son todas expresiones válidas de Javascript.

En el ejemplo a continuación, insertamos el resultado de llamar la función de JavaScript, `formatName(user)`, dentro de un elemento `<h1>`.

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### 3.2.2 JSX también es una expresión

Después de compilarse, las expresiones JSX se convierten en llamadas a funciones JavaScript regulares y se evalúan en objetos JavaScript.

Esto significa que puedes usar JSX dentro de declaraciones `if` y bucles `for`, asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones:

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}
```

## 3.3 Renderizado de elementos

Los elementos son los bloques más pequeños de las aplicaciones de React.

Un elemento describe lo que quieres ver en la pantalla:

```
const element = <h1>Hello, world</h1>;
```

A diferencia de los elementos del DOM de los navegadores, los elementos de React son objetos planos, y su creación es de bajo costo. React DOM se encarga de actualizar el DOM para igualar los elementos de React.

> **Nota**: **DOM** (cuyas siglas son “Document Object Model) es la representación de la interfaz gráfica de nuestra aplicación. Por tanto, cada vez que el estado de la aplicación cambia, lo “esperable” es que también lo haga dicha interfaz para adaptarse a las modificaciones introducidas.

### 3.3.1 Renderizando un elemento en el DOM

Si navegamos por nuestro proyecto, especificamente a la carpeta "./public" habra un archivo **index.html** dentro de este archivo encontraremos una etiqueta `<div>` 

```
<div id="root"></div>
```

Al cual llamamos  nodo “root” porque todo lo que esté dentro de él será manejado por React DOM.
Las aplicaciones construidas solamente con React usualmente tienen un único nodo raíz en el DOM. Dado el caso que estés integrando React en una aplicación existente, puedes tener tantos nodos raíz del DOM aislados como quieras.

Para **renderizar** un **elemento** de React en un nodo raíz del DOM, se necesita pasarle ambos a [`ReactDOM.render()`] dentro de nuestro archivo **./src/index.js**

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
### 3.3.2 Actualizando el elemento renderizado

Los elementos de React son inmutables. Una vez creas un elemento, no puedes cambiar sus hijos o atributos. Un elemento es como un fotograma: este representa la interfaz de usuario en cierto momento en el tiempo.

Con nuestro conocimiento hasta este punto, la única manera de actualizar la interfaz de usuario es creando un nuevo elemento, y pasarlo a [`ReactDOM.render()`]

Ejemplo de un Saludo con reloj en marcha:

```
function  formatName(user){
	return user.firstName +  '  '  + user.lastName;
}

const  user  =  {
	firstName:  'Enzo',
	lastName:  'Marin'
};

function  tick()  {
	const  element  =  (
		<div>
			<h1>Hello, {formatName(user)}!</h1>

			<h2>It is {new  Date().toLocaleTimeString()}.</h2>
		</div>
	);

	// highlight-next-line
	ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick,  1000);
```
Este llama a [`ReactDOM.render()`](https://es.reactjs.org/docs/react-dom.html#render) cada segundo desde un callback del [`setInterval()`]

SALIDA:

	Hello, Enzo Marin
	it is 02:19:35.

### React solo actualiza lo que es necesario

React DOM compara el elemento y sus hijos con el elemento anterior, y solo aplica las actualizaciones del DOM que son necesarias para que el DOM esté en el estado deseado.

Puedes verificar esto inspeccionando el [último ejemplo](https://es.reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element) con las herramientas del navegador: (click derecho sobre la hora e inspeccionar)


## 3.4 Componentes y propiedades

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.

### 3.4.1 Componentes funcionales y de clase

La forma más sencilla de definir un componente es escribir una función de JavaScript:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Esta función es un componente de React válido porque acepta un solo argumento de objeto “props” (que proviene de propiedades) y devuelve un elemento de React. Llamamos a dichos componentes “funcionales” porque literalmente son funciones JavaScript.

También puedes utilizar una [clase de ES6](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes) para definir un componente:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Los dos componentes anteriores son equivalentes desde el punto de vista de React.

### Componente creada automaticamente por react:
Al momento de crear nuestro Proyecto React crea un componente **APP** la cual es una funcion que se encuentra en el archivo **./src/index.html** esta funcion retorna una etiqueta `<div></div>` en la cual ponemos todo lo que queremos que apareza en pantalla. Al momento de crear el proyecto React crea la componente de la siguiente manera:

![enter image description here](https://i.postimg.cc/5ywqVGVw/8.png)
la cual genera la pantalla inicial que se muestra al iniciar nuestro proyecto:

![enter image description here](https://i.postimg.cc/tJYFnWXr/6.png)
para comenzar a trabajar con nuestra propia aplicacion eliminaremos todo esto y solo retornaremos una etiqeta `<div>Hello world</div>
esto generara una pagina en blanco con un encabezaso "Hello world"

### 3.4.2 Composición de componentes

Los componentes pueden referirse a otros componentes en su salida. Esto nos permite utilizar la misma abstracción de componente para cualquier nivel de detalle. Un botón, un cuadro de diálogo, un formulario, una pantalla: en aplicaciones de React, todos son expresados comúnmente como componentes.

Por ejemplo, dentro de nuestro componente principal `App`  podemos llamar a otro componente, vamos a llamarlo `Hello_world` 

```
import  './App.css';

function  Hello_world(){
	return(
		<div> Hello world</div>
	);
}

function  App()  {
	return  (
		<div>this is my component: <Hello_world/></div>
	);
}
export  default App;
```
Salida en el navegador:
	
	this is my component:
	Hello world


#### Si te diste cuenta a la vez creamos nuestro primer componente "Hello_world"
y si ahora quiero estilizar un poco mi etiqueta hello world?

## 4. Practicando

para estilizar nuestro hello world vamos  vamos a colocarle un **id** para poder identificarlo

```
function  Hello_world(){
	return(
		<div  id=  "hello"> Hello world</div>
	);
}
```
lo siguiente es dirigirnos a nuestro archivo **App.css**

> Nota: antes de continuar eliminar todo del archivo App.cs ya que no lo necesitaremos

y vamos a indicar que queremos seleccionar el elemento **hello** y aplicar un borde, para esto:

	#hello{ 
		border:  1px  solid  #000; 
	}

	
lo que acabamos de hacer es darle estilo a un componente, si bien el ejemplo es muy sencillo, este componente **Hello_world**  podría servir para muchas cosas y una de estas es poder reutilizar el código, supongamos que necesitamos volver a ejecutar otra etiqueta `<div>` con su contenido y borde. Para esto no es necesario volver a escribirlo, simplemente se llama nuevamente el componente, cuantas veces se necesite:

```
import  './App.css';

function  Hello_world(){
	return(
		<div  id=  "hello"> Hello world</div>
	);
}
function  App()  {
	return  (
		<div>this is my component: <Hello_world/>  <Hello_world/>  <Hello_world/>  </div>
	);
}

export  default App;
```
Salida en el navegador:
![enter image description here](https://i.postimg.cc/2yr3qjJX/9.png)

### Hagamos que cada texto imprima un texto distinto mediante props

para esto hacemos que nuestro componente reciba un parametro **props** y en lugar de imprimir  "Hello world" vamos a indicarle que imprima  la propiedad del objeto que queremos imprimir esto dentro de **{ }**

```
import  './App.css';
function  Hello_world(props){
	return(
		<div  id=  "hello">  {props.mytext}</div>
	);
}
function  App()  {
	return  (
		<div>this is my component: 
		<Hello_world  mytext="Hello enzo"/>  
		<Hello_world  mytext="Hello Javier"/>  
		<Hello_world  mytext="Hello Maria"/>  </div>
	);
}
export  default App;
```
Salida en el navegador:
![enter image description here](https://i.postimg.cc/5ysvbF0m/10.png)

sin embargo podemos seguir personalizando cada componente, simplemente le pasamos mas propiedades al momento de llamar al componente, y  ya lo podriamos controlar desde el componente, vamos a crear un subtitulo

```
import  './App.css';
function  Hello_world(props){
	return(
		<div  id=  "hello">
			<h3>{props.subtitle}</h3>
			{props.mytext}
		</div>
	);
}

function  App()  {
	return  (
		<div>this is my component:
			<Hello_world  mytext="Hello enzo"  subtitle="subtitulo 1"/>
			<Hello_world  mytext="Hello Javier"  subtitle="subtitulo 2"/>
			<Hello_world  mytext="Hello Maria"  subtitle="subtitulo 3"/>  
		</div>
	);
}

export  default App;
```
Salida en el navegador:
![enter image description here](https://i.postimg.cc/G2Bpz362/11.png)
con esto tenemos 3 componentes, cada uno con sus datos, y como se dijo anteriormente puede pasarse cuantas propiedades necesite, así es como le podemos pasar datos a un solo componente para que luzca de manera distinta a los otros, de esta manera cada componente tiene distintas propiedades. 

##  5. State
el estado de componente, anteriormente creamos un componente que recibe propiedades, las cuales son datos que le pasamos de afuera hacia dentro del componente, pero que pasa si un componente ya tiene datos internamente, los cuales podemos cambiar, a estos datos internos se le conocen como **estados**
lo primero que vamos a hacer es convertir una funcion en una clase

## Convertir una función en una clase

Se puede convertir un componente de función como en una clase en cinco pasos:

1.  Crear una [clase ES6](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes) con el mismo nombre de la funcion y que herede de `React.Component`.
2.  Agregar un único método vacío llamado `render()`.
3.  Mover el cuerpo de la función al método `render()`.
4.  Reemplazar `props` con `this.props` en el cuerpo de `render()`.
5.  Borrar el resto de la declaración de la función ya vacía.
6.  agregar import React,  { Component }  from  'react';

Asi entonces pasamos nuestra funcion `Hello_world`:
```
function  Hello_world(props){
	return(  
		<div  id=  "hello">
			<h3>{props.subtitle}</h3>
			{props.mytext}
		</div>
	);
}
```

a una clase `Hello_world`:

```
class  Hello_world  extends  React.Component{
	render(){
		return(
			<div  id=  "hello">
				<h3>{props.subtitle}</h3>
				{props.mytext}
			</div>
		);
	}
}
```

ahora podemos eliminar o comentar nuestra funcion y comprobar que la clase nos retorna lo mismo en pantalla

Ahora dentro de esta clase podemos crear una propiedad llamada **State** la cual es un objeto. Este objeto almacenara datos del componente, vamos a crear una propiedad **show** para mostrar u ocular el componente. Ahora mediante este valor el componente puede hacer algo, por ejemplo, vamos a colocar un condicional,  **si** show es  **true** retornamos las propiedades, de lo contrario retornamos una etiqueta `<h1>` indicando que no hay elementos

```
class  Hello_world  extends  React.Component{
	state =  {
		show:  false
	}  

	render(){
		if  (this.state.show){
			return(
				<div  id=  "hello">
					<h3>{this.props.subtitle}</h3>
					{this.props.mytext}
				</div>
			);
		}  else{
			return  (
				<h1> No hay elementos</h1>
			);
		}
	}
}
```

ahora si cambiamos el valor de `show` a `true` o `false` obtendremos distintos resultados en pantalla

cuando es True:
![enter image description here](https://i.postimg.cc/JnTS5nn2/12.png)
cuando es False:
![enter image description here](https://i.postimg.cc/sxQHP4bM/13.png)
ahora esto lo tenemos que cambiar directamente en el codigo, vamos a agregar un **boton** que modifique el estado de `show` y vamos a escuchar el evento `onClick` del boton y vamos a controlar lo que hace el boton al momento de darle click mediante una funcion flecha encerrada por `{ }`


```
class  Hello_world  extends  React.Component{
state =  {
show:  true
}
render(){
	if  (this.state.show){
		return(
			<div  id=  "hello">
				<h3>{this.props.subtitle}</h3>
				{this.props.mytext}
				<button  onClick={()  =>  this.setState({show:  false})}>Cambiar estado</button>
			</div>
		);
	}  else{
		return  (
			<h1>
				No hay elementos
				<button  onClick={()  =>  this.setState({show:  true})}>Cambiar estado</button>
			</h1>
		);
	}
}
}
```
Salida en el navegador:
![enter image description here](https://i.postimg.cc/Xvgfr17V/15.png)

## Conclusion

- React es una librería completa, adecuada para muchos tipos de proyectos distintos. Nos permite un desarrollo ágil, ordenado y con una arquitectura mantenible, focalizada en componentes y con vista hacia la reutilizacion de codigo que nos ofrece un gran performance.
