# Tutorial #7: JavaScript

Este tutorial esta inspirado por los tutoriales ....


## 1. Introduccion

### 1.1  ¿Que es Javascript?
**JavaScript**  es un [lenguaje de programación](https://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n "Lenguaje de programación") [interpretado](https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica) "Intérprete (informática)"). Se define como [orientado a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos "Programación orientada a objetos"), [basado en prototipos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_basada_en_prototipos "Programación basada en prototipos"), [imperativo](https://es.wikipedia.org/w/index.php?title=Programaci%C3%B3n_imperativa&action=edit&redlink=1 "Programación imperativa (aún no redactado)"), débilmente tipado y dinámico.

Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web, permitiendo mejoras en la interfaz de usuario y paginas web dinamicas. Es el lenguaje con el que se desarrolla la parte de la funcionalidad frontend en sitios web y aplicaciones web modernas. Pero también es fundamental en muchos otros tipos de desarrollos. Sus usos más importantes son los siguientes:

-   Desarrollo de sitios web del lado del cliente (frontend, en el navegador)
-   Desarrollo de todo tipo de aplicaciones gracias a la plataforma NodeJS
-   Desarrollo de aplicaciones para dispositivos móviles, híbridas o que compilan a nativo
-   Desarrollo de aplicaciones de escritorio para sistemas Windows, Linux y Mac, pudiendo escribir un código compatible con todas las plataformas.
### 1.2 ¿Por que aprender Javascript?
### Javascript Vive en el Navegador

Javascript es el lenguaje estándar de la web,. Aprenderlo te permitirá crear cualquier aplicación para cualquier dispositivo o plataforma. **Es el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas web**. Cuando JavaScript se ejecuta en el navegador, no necesita de un compilador. **El navegador lee directamente el código, sin necesidad de terceros**. Por tanto, se le reconoce como uno de los tres lenguajes nativos de la web junto a HTML (contenido y su estructura) y a CSS (diseño del contenido).
### Tiene el Poder de Crear aplicaciones Completas  Front end y Back end

Puedes usarlo tanto en el lado del servidor, con NodeJs siendo este una forma ligera y escalable de construir aplicaciones mas complejas . Muchas compañias como Linkedin, eBay, PayPal, Netflix y Medium delegan el poder en gran parte de sus sitios a NodeJS, ademas puedes programar en el lado del cliente utilizando Javascript puro o cualquier libreria o framework como React, Angular, VueJS, Backbone.js etc.

## 2. "Hola mundo" en JavaScript

como ya se dijo anteriormente Javascript se ejecuta dentro de un navegador, por lo que necesitaremos instalar cualquier navegador para que funcione como nuestro interprete de Javascript.
	
lo siguiente es abrir el navegador y precionar la tecla **f12**, esto nos abrira la ventanda de desarrollador, una vez abierta la ventana, nos dirigimos a la pestaña **consola** 

en esta consola escribimos:

    console.log("Hola Mundo!");
salida de la consola:

    Hola Mundo!
**console:** provee acceso a la consola de depuración de los navegadores 
**log:** imprime un texto o mensaje 


###  ¿ Y si no queremos imprimir en consola sino alterar la pagina?
para esto hay que indicarle que queremos imprimir o modificar el documento, con **document** indicar que escribiremos **write** y pasar el texto que queremos imprimir en la pagina.

en consola escribimos:

    document.write("Hola mundo");


Asi de facil! sin embargo esta no es la unica forma en la que podemos ejecutar el lenguaje.

## 3. Primer proyecto Javascript
crearemos una carpeta en el cual crearemos 3 archivos, **index.html**, **app.js**


en nuestro archivo **index.html** crearemos una plantilla basica de HTML:

    <!DOCTYPE html>
	<html  lang="es">
		<head>
			<meta  charset="utf-8">
			<meta  http-equiv="X-UA-Compatible"  content="IE=edge">
			<meta  name="description"  content="">
			<meta  name="viewport"  content="width=device-width, initial-scale=1">
			<title>Tutorial Javascript</title>
		</head>
		<body>
			
		</body>
	</html>

ahora queremos ejecutar codigo javascript por lo tanto en **app.js** escribiremos:

    document.write("<h1>Hola mundo</h1>");

ahora nos falta conectar el codigo javascript con el codigo HTML, para esto html cuenta con una etiqueta **script**  la cual cuenta con un atributo llamado **src** en el cual especificaremos el nombre del **archivo Javascript**

agregamos esta etiqueta el el **body** del codigo HTML:

    <!DOCTYPE html>
	<html  lang="es">
		<head>
			<meta  charset="utf-8">
			<meta  http-equiv="X-UA-Compatible"  content="IE=edge">
			<meta  name="description"  content="">
			<meta  name="viewport"  content="width=device-width, initial-scale=1">
			<title>Tutorial Javascript</title>
		</head>
		<body>
			<script  src="app.js"></script>
		</body>
	</html>

LISTO! solo queda  abrir el archivo **index.html** el cual se abrira en el navegador y nos mostrara una pagina con nuestro mensaje.


### ¿Y por que hacer esto con Javascript y no directamente con una etiqueta h1 de html?

la razon es que el poder crear elementos con Javascript es mucho mas rapido que crearlos con HTML, sin embargo esto no es algo practico para crear sitios web sino aplicaciones web. Todo esto se hace mediante Frameworks y bibliotecas. sin embargo este es tema de otro tutorial

## 4. Bases de Javascript

### 4.1 La consola del navegador
vamos a aprender a como  interactuar con la consola del navegador, esto es importante ya que al momento de crear programas utilizando Javascript, la consola nos ayudara a estar al tanto de como esta funcionando nuestro programa, podremos ver posibles errores, respuestas que uno mismo haya escrito, testear la aplicacion, etc.

En el primer ejemplo aprendimos a como imprimir en consola un mensaje, pero se puede hacer mucho mas que solo imprimir texto. Como por ejemplo:
#### Crear nuestros propios errores en consola
	console.error("error customizado");

salida: 
![](https://eastus21-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https://alumnosuach-my.sharepoint.com:443/_api/v2.0/drives/b!u0G9EjOvaUOvf0gaUBN8XgLk2IIazSlDivgBTZk5tG_SJnS3r0klSJGrQTgQR4Tw/items/01TGJB7WNESYDVLKT7K5HLF6IAKG7MACA6?version=Published&encodeFailures=1&ctag=%22c:%7B550796A4-7FAA-4E57-B2F9-0051BEC0081E%7D,1%22&srcWidth=&srcHeight=&width=1848&height=910&action=Access)
Asi es como podriamos indicar con un error personalizado que nuestra aplicacion ha fallado

Sin embargo no solamente podemos ver **errores**, sino que tambien podriamos **medir el tiempo** que se demora una aplicacion, **mostrar tabla de datos** que podriamos tener en neustra aplicacion, etc.


Para mas informacion sobre **Metodos** en el objeto **console** click [aqui](https://developer.mozilla.org/es/docs/Web/API/Console)




## 4.2 Tipos de datos

Al igual que cualquier lenguaje de programacion existen tipos de datos, en Javascript algunos de los tipos de datos que tenemos son:
## [Tipado dinámico]

JavaScript es un lenguaje _débilmente tipado_ y _dinámico_. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:
```
let foo = 42;    // foo ahora es un número
foo     = 'bar'; // foo ahora es un string
foo     = true;  // foo ahora es un booleano

```
 ## [Valores primitivos]

Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo (y a diferencia de C), las cadenas son inmutables. Nos referimos a los valores de estos tipos como "_valores primitivos_".
### [Tipo Boolean]

`Boolean` representa una entidad lógica y puede tener dos valores: `true` y `false`. Consulta [Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean) y [`Boolean`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Boolean) para obtener más detalles.

### [Tipo Null]

El tipo `Null` tiene exactamente un valor: `null`. Consulta [`null`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/null) y [Null](https://developer.mozilla.org/es/docs/Glossary/Null) para obtener más detalles.

### [Tipo Undefined]

Una variable a la que no se le ha asignado un valor tiene el valor `undefined`. Consulta [`undefined`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/undefined) y [Undefined](https://developer.mozilla.org/es/docs/Glossary/undefined) para obtener más detalles.

### [Tipo Number]

ECMAScript tiene dos tipos numéricos integrados: **`Number`** y **`BigInt`** (ve más abajo).

El tipo `Number` es un [valor en formato binario de 64 bits de doble precisión IEEE 754](https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisión) (números entre -(253 - 1) y 253 - 1). Además de representar números de punto flotante, el tipo `Number` tiene tres valores simbólicos: `+Infinity`, `-Infinity` y [`NaN`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/NaN) ("**N**ot a **N**umber" o No es un número).


### [Tipo BigInt]

El tipo [`BigInt`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/BigInt) es un primitivo numérico en JavaScript que puede representar números enteros con precisión arbitraria. Con `BigInt`s, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para `Number`s.

Un `BigInt` se crea agregando `n` al final de un número entero o llamando al constructor.

### [Tipo String]

El tipo [`String`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String) de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento del `String` ocupa una posición en la cadena. El primer elemento está en el índice `0`, el siguiente en el índice `1`, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene.

A diferencia de algunos lenguajes de programación (tal como C), las cadenas de JavaScript son inmutables. Esto significa que una vez que se crea una cadena, no es posible modificarla.

Sin embargo, todavía es posible crear otra cadena basada en una operación en la cadena original. Por ejemplo:

-   Una subcadena de la original seleccionando letras individuales o usando [`String.substr()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/substr).
-   Una concatenación de dos cadenas usando el operador de concatenación (`+`) o [`String.concat()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/concat).



### [Tipo Symbol]

Un símbolo es un valor primitivo **único** e **inmutable** y se puede utilizar como clave de una propiedad de objeto (ve más abajo). En algunos lenguajes de programación, los símbolos se denominan "átomos".

Para obtener más detalles, consulta [Symbol](https://developer.mozilla.org/es/docs/Glossary/Symbol) y el contenedor de objetos [`Symbol`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol) en JavaScript.


### [Object]
Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto

Las propiedades de un objeto definen las características del objeto. Accedes a las propiedades de un objeto con una simple notación de puntos:
```
objectName.propertyName
```
Por ejemplo, vamos a crear un objeto llamado `myCar` y le vamos a asignar propiedades denominadas `make`, `model`, y `year` de la siguiente manera:
```
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```
El ejemplo anterior también se podría escribir usando un **[iniciador de objeto]** que es una lista delimitada por comas de cero o más pares de nombres de propiedad y valores asociados de un objeto, encerrados entre llaves (`{}`):
```
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
```

Las propiedades no asignadas de un objeto son [`undefined`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/undefined) (y​no [`null`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/null)).

```
myCar.color; // undefined
```
[Para mas informacion sobre **Objetos** en javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos)

## 4.3 Variables
Una variable es un elemento que se emplea para almacenar y hacer referencia a otro valor. En javascript una variable se crean mediante la palabra reservada `var`

algunas de las variables que podremos encontrar en javascript son:

### 4.3.1. Numéricas
	var iva = 16;        // variable tipo entero
	var total = 234.65;  // variable tipo decimal

### 4.3.2. Cadenas de texto
	var mensaje = "Bienvenido a nuestro sitio web";
	var nombreProducto = 'Producto ABC';
	var letraSeleccionada = 'c';
### 4.3.3. Arrays
	var nombre_array = [valor1, valor2, ..., valorN];

### 4.4.4. Booleanos
	var clienteRegistrado = false;
	var ivaIncluido = true;


## 5. Operadores

operacion de numeros almacenados en variables:
	name_var1 Oper name_var2
**Ejemplo 1:  suma de numeros**
	
	var number1 = 5;
	var number2 = 10;
	var result = number1 + number2 ;
	console.log(result);

Salida:
![enter image description here](https://eastus21-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https://alumnosuach-my.sharepoint.com:443/_api/v2.0/drives/b!u0G9EjOvaUOvf0gaUBN8XgLk2IIazSlDivgBTZk5tG_SJnS3r0klSJGrQTgQR4Tw/items/01TGJB7WNVZUYQIPNW6BDY3QAN45273VYC?version=Published&encodeFailures=1&ctag=%22c:%7B0431CDB5-B63D-47F0-8DC0-0DE775FDD702%7D,1%22&srcWidth=&srcHeight=&width=1848&height=910&action=Access)
Concatenacion de String:

string + string

**Ejemplo 1: concatenacion de String**

	var name = "enzo";
	var lastName = "Marin";
	var completeName = name + " " + lastName;
	console.log(completeName);

Salida:

![enter image description here](https://eastus21-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https://alumnosuach-my.sharepoint.com:443/_api/v2.0/drives/b!u0G9EjOvaUOvf0gaUBN8XgLk2IIazSlDivgBTZk5tG_SJnS3r0klSJGrQTgQR4Tw/items/01TGJB7WL6J7T44JEVIZALBWVD2CI5S4P4?version=Published&encodeFailures=1&ctag=%22c:%7BCEE74F7E-9524-4046-B0DA-A3D091D971FC%7D,1%22&srcWidth=&srcHeight=&width=1848&height=910&action=Access)

Para mas informacion sobre **Operadores** click [aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)


## 6. Condicionales

### 6.1 Declaraciones if ... else

	if (condición) {
	  código a ejecutar si la condición es verdadera
	} else {
	  ejecuta este otro código si la condición es falsa
	}
Este código es fácil de leer — está diciendo "**si (if)** la **condición** retorna verdadero (`true)`, entonces ejecute el código A, **sino (else)** ejecute el código B"

Habrás notado que no tienes que incluir `else` y el segundo bloque de llaves — La siguiente declaración también es perfectmaente legal.

	if (condición) {
	  ejecuta el código de al ser verdadera la condición
	}
	ejecuta otro código


### 6.2 ## Declaraciones con switch
`El` condicional `if...else` hace un buen trabajo permitiéndonos realizar un buen código, pero esto viene con sus desventajas. Hay variedad de casos donde necesitarás realizar varias elecciones, y cada una requiere una cantidad razonable de código para ser ejecutado y/o sus condicionales son complejas (i.e. operadores lógicos múltiples). Para los casos en los que solo se desea establecer una variable para una determinada opción de valores o imprimir una declaración particular dependiendo de una condición, la sintaxis puede ser un poco engorrosa, especialmente si se tiene una gran cantidad de opciones.

Para estos casos los [`switch` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) son de gran ayuda — toman una sola expresión / valor como una entrada, y luego pasan a través de una serie de opciones hasta que encuentran una que coincida con ese valor, ejecutando el código correspondiente que va junto con ella. Aquí hay un pseudocódigo más para hacerte una idea:


	switch (expresion) {
	  case choice1:
	    ejecuta este código
	    break;

	  case choice2:
	    ejecuta este código
	    break;

	  // Se pueden incluir todos los casos que quieras

	  default:
	    por si acaso, corre este código
	}

1.  `La palabra clave switch`, seguida por un conjunto de paréntesis.
2.  Una expresión o valor dentro de los paréntesis.
3.  La palabra clave `case`, seguida de una elección con la expresión / valor que podría ser, seguido de dos puntos.
4.  Algún código a correr si la elección coincide con la expresión.
5.  Un declaración llamada `break`, seguida de un punto y coma. Si la elección previa coincide con la expresión / valor, el explorador dejará de ejecutar el bloque de código aquí, y continuará a la siguiente línea de código. Si la opción anterior coincide con la expresión / valor, aquí el navegador deja de ejecutar el bloque de código y pasa a cualquier código que aparezca debajo de la declaración de `switch`.
6.  Como muchos otros casos, los que quieras.
7.  La palabra clave `default`, seguido exactamente del mismo patrón de código que en los casos anteriores , excepto que el valor predeterminado no tiene opciónes después de él, y no es necesario que se use `break` porque no hay nada que ejecutar después de este bloque de todas formas. Esta es la opción predeterminada o por defecto que se ejecuta si ninguna de las opciones coincide.

## 7. Bucles
Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.


Las declaraciones para bucles proporcionadas en JavaScript son:

-   [Declaración for](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_for)
-   [Declaración do...while](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_do...while)
-   [Declaración while](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_while)
-   [Declaración labeled](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_labeled)
-   [Declaración break](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_break)
-   [Declaración continue](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_continue)
-   [Declaración for...in](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_for...in)
-   [Declaración for...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#Declaracion_for...of)




## 8 Funciones
Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.


### Declaracion de funciones

Una **definición de función** (también denominada **declaración de función** o **expresión de función**) consta de la palabra clave [`function`], seguida de:

-   El nombre de la función.
-   Una lista de parámetros de la función, entre paréntesis y separados por comas.
-   Las declaraciones de JavaScript que definen la función, encerradas entre llaves, `{ ... }`.

Por ejemplo, el siguiente código define una función simple llamada `square` ("cuadrado"):

```
function square(number) {
  return number * number;
}
```
### Llamar funciones

_Definir_ una función no la _ejecuta_. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.

**Llamar** a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función `square`, podrías llamarla de la siguiente manera:

```
square(5);
```
La declaración anterior llama a la función con un argumento de `5`. La función ejecuta sus declaraciones y devuelve el valor `25`.

para mas informacion sobre funciones en javascript click [aqui](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones)


# Fundamentos de Javascript Moderno


## 1. Var vs Let vs Const

cuando declaramos una variable como  **var** esta variable puede ser declarada nuevamente y modificada:
		
		var edad = 10;
		var edad = 5;
		console.log(edad);
Salida:

	5	
esto podria generar problemas ya que en el caso que tengamos una gran cantidad de codigo y al principio de nuestro codigo utilizamos esta variable **edad** podria pasar que mas adelante se nos olvide que declaramos esta variable y la volvamos a declarar con el mismo nombre pero querer usarla con otro fin. 

sin embargo si la declaramos con **let** javascript ya no nos dejara declarar una misma variable dos veces con el mismo nombre:

	let edad = 10;
	let edad = 5;
	console.log(edad);

Salida:

	Uncaught SyntaxError: Identifier 'edad'app.js:3 has already been declared 

sin embargo si que podemos modificarla:

	let edad = 10;
	edad = 5;
	console.log(edad);

Salida:

	5

por otro lado podemos definir **constantes** mediante la palabra reservada **const** es decir que no puede cambiar su valor en el tiempo.

para las constantes existe la excepcion para los **Objetos** o **arreglos**  pueden ser modificadas dentro de sus propiedades

**Ejemplo: agregar elemento a un arreglo definido como const**

	const arrayNum = [10,20,30];
	arrayNum.push(40);
	console.log(arrayNum);

Salida:

	[10,20,30,40]

**Ejemplo:**

	const persona = {
		nombre : "Enzo",
		edad: 20
	}
	persona.edad = 21
	persona.pais = "Argentina"
	console.log(persona)
	

Salida

	{nombre: "Enzo", edad: 21, pais: "Argentina"}



## 2. Funciones de flecha

anteriormente habiamos definido un funcion de la manera:

	function square(number) {
	  return number * number;
	}

sin embargo existen las llamadas funciones de flecha que nos ahorran codigo, por ejemplo:

definamos una funcion normal que suma dos numeros:

	function suma(num1, num2) {
		console.log(num1 + num2)
	}
	// llamamos a la funcion y le pasamos dos numeros como parametros
	suma(10,20)

Salida:

	30

ahora escribamos la misma funcion pero como funcion de flecha

	const suma = (num1, num2) => console.log(num1+num2)
	// llamamos a la funcion
	suma(10,5)
Salida: 15

## 3. Template String

Los **Template Strings** es una característica bastante sobresaliente y novedosa que incorpora la versión ES6 de JavaScript permitiendo una manipulación de cadenas de texto mas pulcra y legible.

### **¿Qué podemos hacer con un Template String?**

-   Interpolación de cadenas de texto.
-   Escritura de código multilínea.
### **Sintaxis**
```
let texto = `Esto es un Template Literal`;
```
### **Interpolación de cadenas de texto**

La concatenación clásica de caracteres se hace de la siguiente manera:  

```
let nombre = "Roxana";
let apellido = "Rodriguez";
console.log("El nombre completo es: " + nombre + " " + apellido)
//salida: "El nombre completo es: Roxana Rodriguez"

```

Ahora con los Template Strings podríamos hacer lo siguiente:  

```
let nombre = "Roxana";
let apellido = "Rodriguez";
console.log(`El nombre completo es: ${nombre} ${apellido}`)
//salida: "El nombre completo es: Roxana Rodriguez"

```

> _`${expresion}` permite imprimir expresiones dentro de las llaves (siempre y cuando se use Template Literals)_

### **Imprimiendo expresiones**

Es posible imprimir cualquier tipo de expresión javascript dentro de `${}`. Por ejemplo:  

```
console.log(`${10+10}`);
//salida: "20"
```
También pueden usarse para llamar funciones:  

```
let saludo = (nombre) => `Hola ${nombre}`;
console.log(`${saludo("Ruben")}`)
//salida: "Hola Ruben"

```

> En la línea 1 se usa una "Fat Arrow Function" (veremos estas funciones en post posteriores)

### **Strings multilínea**

Por ejemplo, si queremos imprimir un texto en varias líneas usaríamos `\n\` :  

```
let frase = "Las palabras nunca alcanzan \n\cuando lo que hay que decir \n\desborda el alma.";
console.log(frase);
/* salida:
"Las palabras nunca alcanzan 
cuando lo que hay que decir 
desborda el alma."
*/

```

para mas informacion sobre **Template Strings** click [aqui](https://www.javascripttutorial.net/es6/javascript-template-literals/)

## 4. **Destructuring assignment**

es una expresión de JavaScript que hace posible descomprimir valores de matrices o propiedades de objetos en distintas variables.

	let a, b, rest;
	[a, b] = [10, 20];

	console.log(a);
	// expected output: 10

	console.log(b);
	// expected output: 20

	[a, b, ...rest] = [10, 20, 30, 40, 50];

	console.log(rest);
	// expected output: Array [30,40,50]


### Ejemplo: Destructuring assignment con Objetos 

	const  mascota  =  {
	nombre:  'Tom',
	edad:  5,
	vivo:  true,
	razas :  ['peludo',  'negro']
	}

	const{edad,  nombre}  = mascota
	console.log(edad)

Salida:

	5
## 5. Array de objetos

	const  web  =  {
		nombre:  'ejemplo',
		links:{
			enlace:  'www.ejemplo.cl'
		},
		redesSociales:{
			youtube:{
				enlace:  'www.youtube.com/ejemplo',
				nombre:  'ejemplo yt'
			},
			facebook:{
				enlace: 'facebook.com/bluuweb',
				nombre: 'ejemplo fb'
			}			
		}
	}

	console.log(web.redesSociales.youtube.enlace)

Salida:

	http://www.youtube.com/ejemplo

Utilizando  **Destructuring assignment**

	const  web  =  {
		nombre:  'ejemplo',
		links:{
			enlace:  'www.ejemplo.cl'
		},
		redesSociales:{
			youtube:{
				enlace:  'www.youtube.com/ejemplo',
				nombre:  'ejemplo yt'
			},
			facebook:{
				enlace: 'facebook.com/bluuweb',
				nombre: 'ejemplo fb'
			}			
		}
	}
	const  {enlace,nombre}  = web.redesSociales.youtube
	console.log(enlace)
	console.log(nombre)

# Fetch API
la API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. (nos permite consumir APIs)

Para este ejemplo vamos a consumir la api [pokeAPI](https://pokeapi.co/)

al revisar la URL https://pokeapi.co/api/v2/ obtendremos un **objeto** y de este objeto vamos a seleccionar pokemon  https://pokeapi.co/api/v2/pokemon/ el cual nos devuelve otro objeto con esto podriamos obtener y manipular datos desde la api

**Ejemplo basico de api de pokemones, nos en tregara los nombres de los pokemones**

	// fetch
	const  url  =  'https://pokeapi.co/api/v2/pokemon/'
	fetch(url)  // leemos la api
		.then(res  => res.json())  // espera una promesa (que nos devuelva los datos)
		.then(data  =>{  // obtenemos la data
			//console.log(data.results)
			data.results.forEach(element  =>  {
				console.log(element.name)
			});
		})
		.catch(error  => console.log(error))  // si hay algun error en .then

## Conclusión del tutorial

-   javaScript se ha convertido en una herramienta importante para el desarrollo web
-   Es uno de los pilares (junto con HTML y CSS) del desarrolo de paginas y aplicaciones web
-   Cuenta con una gran cantidad de frameworks para crear distintos tipos de aplicaciones web
