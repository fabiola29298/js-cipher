# Cifrado César

**"CIPHER"** es una página web donde puedes cifrar tus mensajes para agregar una capa más de seguridad aparte de lo que te provee las redes sociales. Esta página es para personas que necesitan proteger sus mensajes con información sensible como datos personales, dirección de casa, etc. Con un solo click puedes cifras o des-cifrar un mensaje, además puedes copiar el nuevo mensaje rapidamente. Si quieren enviarlo a un chat de WhatsApp solo agrega el número de celular y lo envías. Estas últimas caraterísticas ayudan al usuario a enviar sus mensajes con facilidad. [Pruébalo aquí](https://fabiola29298.github.io/js-cipher/src/)


## Funcionalidades
- El usuario debe ingresar el número de desplazamiento y el texto sino al presionar un botón se desplegará el mensaje "Ingresa los datos".
- Al precionar "Encrypt" o "Decrypt" el nuevo mensaje se mostrará en el espacio inferior de los botones.
- Para cifrar o des-cifrar el nuevo mensaje se puede presionar el ícono de intercambiar que esta entre los botones.
- El botón "Copy message" copia todo el nuevo mensaje en el portapapeles.
- El botón "Send to WhatsApp" envía el mensaje al número ingresado en la parte superior del botón.

## Consideraciones sobre el proyecto
- El proyecto aplica el **cifrado césar**, es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.
- Se usa este alfabeto simple (acepta mayúsculas, minusculas y sin ñ): A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Se puede ingresar números positivos y negativos en el número de desplazamiento (offset).
- Se debe ingresar + seguido del código de país y número de telefono para enviar el mensaje por WhatsApp. Ej: +59170000000



## Manual de instalación

1.  📦 Instala las dependencias del proyecto con el comando `npm install`.
2. Ejecuta las pruebas unitarias (unit tests) con el comando `npm test`.
3. Para ver la interfaz del programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.

## Aprendizajes nuevos

* Manejo del DOM y BOM.
* Realizar pruebas unitarias con `HTMLint` y `ESLINT`.
* `BoilerPlate`.
* Manejo del código ASCII. Página de referencia [www.elcodigoascii.com.ar](https://elcodigoascii.com.ar/codigos-ascii/signo-igual-que-igualdad-codigo-ascii-61.html)

## Tecnología usada

* HTML
* CSS
* JavaScript

Este proyecto es parte de la ruta del bootcamp de [Laboratoria - Frontend Developer](https://www.laboratoria.la/). Estoy siguiendo esta ruta de forma personal y autodidacta para aprender en base a proyectos.


<div align="center">
  <h3>
    <a href="https://fabiola29298.github.io/js-cipher/src/">
      Demo 📱
    </a>
    <span> | </span>
    <a href="https://github.com/fabiola29298/js-cipher">
      Código
    </a>
    <span> | </span>
    <a href="https://github.com/Laboratoria/bootcamp/tree/main/projects/01-cipher">
      Instrucciones
    </a>
  </h3>
</div>

## Previsualización

![image](/src/img/preview.jpg)
##
