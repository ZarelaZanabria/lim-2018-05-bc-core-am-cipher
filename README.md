# Cifrado César
> **Nota**: El siguiente documento detalla todo el proceso de elaboración del proyecto de Cifrado Cesar. Se divide en 5 fases de la metodología ágil, donde se menciona el problema que se presenta se van a obtener los datos necesarios sobre los que se trabajará en las fases posteriores y que determinarán el conjunto del estudio para poder presentar el producto final.
# Planificación 
En la fase de planeación se determino las actividades a realizar y se pudo organizar un **Sprint Plane** 
según la metodología de SCRUM
-------------------------------------------------------------------------------------------------

Actividades a realizar para el **desarrollo del producto**:
+ Identificación del problema.
+ Análisis y diseño del prototipo.
+ Desarrollo de la codificación del producto.
+ Realización de pruebas.

## Identificación del problema
* Lo primero que se realizo es identificar el problema: **Cómo se lograra implementar un aplicativo web mediante la metodología SCRUM que permita cifrar y descifrar textos para organizar un fiesta de cumpleaños sorpresa?**
> Ahora es importante determinar los objetivos según el problema, identificando los requerimientos del usuario. 

Lo primero que se hizo es identificar las tareas principales para poder realizar el proyecto.

![sprint](https://image.ibb.co/iuK8v8/20180601_112848_1.jpg)



## Identifiación de los Objetivos.
1. Identificar los requerimientos del usuario mediante el uso de entrevistas o encuestas.
2. Diseñar la interfaz gráfica del usuario , para cifrar y descifrar textos.
3. Codificar y realizar las pruebas del aplicativo web, mediante el uso de Framework para validar la codificacion 
del lenguaje HTML, JavaScritps y los DOM.  

# Diseño

## Identificación de requerimientos.
*  El usuario debe cifrar un texto en donde este debe enviarlo a otro, y el usuario que lo recibe debe descifrarlo, 
teniendo en cuenta el número de posición del cifrado. Entonces el problema se presenta en como el usuario de va a descifrar el texto va saber cuál es posición que debe ser cifrar. 
+ Para ello se necesita un text donde se ingresa el número de posición tanto para cifrar como para descifrar.
+ Se necesita un textarea donde se debe ingresar el texto a Cifrar o Descifrar.
+ Se requiere otro textara donde muestre el resultado.
+ Por último se requiere de botones donde muestre al usuario que acción desee realizar el de cifrar o descifrar.

Según los requerimientos del usuario se diseño en una sola pantalla el aplicativo para poder cifrar y descifrar, debido que el usuario tiene abierto varios aplicativos en el celular y lo que se desea es que sola una pantalla permita hacer varias cosas. Por tal motivo se diseño todo en una sola pantalla. 
-------------------------------------------------------------------------------------------------

## Realización del Prototipo.
Se diseño un prototipo de cómo debe ser el aplicativo de Cifrado y Descifrado según los requerimientos del usuario, y a la vez como debe Visualizarse en un móvil. Se pudo presentar al prototipo al usuario permitiendo mejorar el diseño para que pueda ser codificado.


![Prototipo ](https://image.ibb.co/gFtwho/20180604_080050_1.jpg)
# Codificación
Una vez realizado el prototipo del producto final, se llevó acabo la fase de codificación del aplicativo utilizando el lenguaje de JavaScritps, HTML y CSS.

![Codificacion](https://preview.ibb.co/cXfOv8/20180604_080106_1.jpg)
# Testing Unitario
Para esta fase se relizo  las pruebas unitarias del código, mediante el uso de Framework como **CHAI, MOCHA**, permitiendo mejorar la codificacion e interación con el usuario. 

![Testing Unitarios](https://image.ibb.co/irDXoT/Pruebas.png)

Para poder ver la funcionalidad del proyecto se realizo los Testing Unitarios por los siguientes motivos: 

+ Facilita los cambios en la aplicación ya que las pruebas nos asegurarán que los nuevos cambios no han introducido errores.
+ Simplifica la integración gracias a que permiten llegar a la fase de integración con un grado alto de seguridad de que el código está funcionando correctamente. De esta manera se facilitan las pruebas de integración.
+ Documenta el código. Las propias pruebas son un libro abierto sobre el funcionamiento de la función y los resultados esperados.
+ Separación de la interfaz y la implementación. Dado que la única interacción entre los casos de prueba y las unidades bajo prueba son las interfaces de estas últimas, se puede cambiar cualquiera de los dos sin afectar al otro.
+ Los errores están más acotados y son más fáciles de localizar: dado que tenemos preparado un test para cada función que puede desenmascararlo.
+ Aunque pueda parecer mentira, los test unitarios aceleran el desarrollo de nuestro software debido a que.
Ayuda a tener un código desacoplado gracias a que cada una de nuestras funciones está pensada para devolver un resultado que podrá ser testeado.

>**Nota**: Las 4 fases del proceso de desarrollo del aplicativo de Cifrar y Descifrar se repitieron con dos Sprint. Cada uno con un tiempo de duración de 7 días. También se pudo hacer pruebas con los usuarios. Mejorando la parte de diseño.

FINAL!!
------------------------------------------------------------------------------------------------------------------------
