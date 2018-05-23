# ♡ T W I T T E R ♡

### Reto de código. Unidad "Creando interacción con JavaScript"

##### Objetivo: Recrear la página Twitter con los puntos de funcionalidad requeridos en LMS.

##### Solución:

###### Maquetado de HTML

* Creación de una estructura con dos secciones principales. Header y Main.
* Maquetar el área donde se ingresará el texto.     
  1. textarea. Ingreso de texto
  2. Span contador de caracteres ingresados a textarea.
  3. Boton de submit
* Arquitectar estructura de tweet enviado. *(esta sección se creara con DOM)*
  1. section que albergará todos los tweets enviados
  * Twitt enviado se estructurará de:
  1. div
  2. p para texto ingresado en textArea
  3. span que contendrá la hora del tweet

###### Lógica de JavaScript

* Imprimir Tweet. Al ejecutar el evento submit, se ejecutarán la funcion:
  1. Crear elementos de tweet enviado (div que contiene un p y span)
  2. Obtener hora. Se usará otra función.
  3. "Unir" los elemntos creados para obtener estructura arquitectada.
  4. El boton de submit estará deshabilitado por default. Al ejecutar esta función se habilitará y cambiara de color.
  5. Prevenir Default, ya que es un boton submit

* Imprimir contador de caracteres restantes en tweet. *Default 140*. La funcion se ejecutara con el evento keyup
  1. Obtener los caracteres del texto ingresado en la textarea.
  2. Imprimir en span contador la resta de default caracteres y el largo de caracteres ingresados.
  * Para hacer que el contador indique visualmente (colorres) los caracteres restantes, se usará un if y al llegar de 120 a 130 caracteres se pintara amarillo el contador, de 130 a 140 se pintará rojo.
  3. Al llegar a 140 caracteres el boton submit se deshabilitara

* Obtener hora de tweet
  1. De las funciones getHours y getMinutes separar por horas y minutos

* Reestablecer tamaño de textarea despues de enviar el tweet. Lo accionará evento input
  1. Por medio de asignacion de estilo, se asignará el height default al textarea

###### Funcionalidades adicionales.
  * Página responsiva

###### Página Twitter: https://annkrn.github.io/Twitter/
