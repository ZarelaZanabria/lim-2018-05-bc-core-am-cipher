# Cifrado César
> **Nota**: El siguiente documento detalla todo el proceso de elaboración del proyecto de Cifrado Cesar. Se divide en 5 fases de la metodología ágil, donde se menciona el problema que se presenta se van a obtener los datos necesarios sobre los que se trabajará en las fases posteriores y que determinarán el conjunto del estudio para poder presentar el producto final.



## Planeación

En la fase de planeacion se determino las actividades a realizar y se pudo organizar un **Sprint Plane** 
segun la metodologiá de SCRUM
--------------------

Actividades a realizar para el **desarrollo del producto**:
+ Identificación del problema.
+ Análisis y diseño del prototipo.
+ Desarrollo de la codificacion del producto.
+ Realización de pruebas.


## Identificación del problema
* Lo primero que se realizo es identificar el problema: **¿Cómo se lograra implementar un aplicativo web mediante la metodología SCRUM que permita cifrar y descifrar textos para organizar un fiesta de cumpleaños sorpresa?**
 
 > Ahora es importante determinar los objetivos según el problema, identificando los requerimientos del usuario. 

 ##Identifiación de los Objetivos.
  1. Identificar los requerimientos del usuario mediante el uso de entrevistas o encuestas.
  2. Diseñar la interfaz gráfica del usuario , para cifrar y descifrar textos.
  3. Codificar y realizar las pruebas del aplicativo web, mediante el uso de Framework para validar la codificacion 
     del lenguaje HTML, JavaScritps y los DOM.  


## Identificacion de requerimientos.
  *  El usuario debe cifrar un texto en donde este debe enviarlo a otro, y el usuario que lo recibe debe descifrarlo, 
     teniendo en cuenta el número de posición del cifrado. Entonces el problema se presenta en como el usuario de va a descifrar el texto va saber cuál es posición que debe ser cifrar. 


## Consideraciones generales





## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos cómo pensaste en los usuarios al desarrollar tu
producto y cuál fue tu proceso para definir el producto final a nivel de
experiencia y de interfaz.

* quiénes son los principales usuarios de producto
* cuáles son los objetivos de estos usuarios en relación con el producto
* cómo crees que el producto que estás creando les está resolviendo sus
  problemas

### UI

La interfaz debe permitir al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener to _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos decifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Hacker edition

No estás limitada a implementar solo la parte obligatoria. Te sugerimos crear
también una función `cipher.createCipherWithOffset()` que reciba un `offset` y
devuelva un nuevo objeto con dos métodos (`encode` y `decode`) que solo reciban
el string y usen el `offset` que se pasó a `createCipherWithOffset` a la hora
de crear el objeto.

Lo anterior, nos ayuda a observar tu capacidad de autoaprendizaje, pudiendo
agregar a tu trabajo un elemento que lo lleva al siguiente nivel.

Para el diseño de la experiencia de usuario, puedes investigar y aplicar algunas
de las técnicas y herramientas relacionadas al proceso de diseño como
entrevistas y testeos con usuarios o sketching y prototipado.

Lo mismo en habilidades blandas, puedes realizar una planificación experta
teniendo en consideración la utilización de herramientas de planificación, como
un calendario, trello, papelógrafo u otras, creando un plan paso a paso de cómo
quiere abarcar el reto o problema. Realizando una estimación realista del
tiempo.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages.

## Evaluación

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_.

### General

| Característica/Habilidad | Nivel esperado |
|--------------------------|----------------|
| Completitud | 3
| Investigación | 3
| Documentación | 2

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 2
| Nomenclatura/semántica | 2
| Funciones/modularidad | 1
| Estructuras de datos | 0
| Tests | 2
| **HTML** | |
| Validación | 2
| Estilo | 3
| Semántica | 2
| SEO | 0
| **CSS** | |
| DRY | 2
| Responsive | 2
| **SCM** | |
| Git | 1
| GitHub | 2
| **CS** | |
| Lógica | 1
| Arquitectura | 1
| Patrones/paradigmas | 0

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 2 |

### Habilidades Blandas

Para este reto queremos que intentes llegar al nivel 2 por lo menos en 5 de tus
habilidades blandas y que tengas el nivel 1 en sólo 3 habilidades.

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 2
| Autoaprendizaje | 2
| Solución de problemas | 2
| Dar y recibir feedback | 2
| Adaptabilidad | 2
| Trabajo en equipo | 1
| Comunicación eficaz | 1
| Presentaciones | 1

***

## Puntos de experiencia

Este proyecto en el bootcamp te otorgará 100 XP (Puntos de experiencia).

## Primeros pasos
