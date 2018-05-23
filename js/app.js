//Seleccionar los elementos del html para manipularlos con js
var addTweet = document.forms['add-tweet'];
var textArea = document.getElementById('tweet');
var timeLine = document.getElementById('time-line');
var counterNumber = document.getElementById('character-count')
var button = document.getElementById('btn')

//Evento para identificar el click en el formulario del tweet
addTweet.addEventListener('submit', printTweet);

//Evento para dentificar el número de veces que se presiona una tecla
textArea.addEventListener('keyup', counter)

//Evento para identificar el click
button.addEventListener('click', clearCounter)

//Evento que identifica cambios en la textarea
textArea.addEventListener('input', resizeTextarea);

//Función que resetea el contador cada vez que se publica un tweet
function clearCounter() {
    counterNumber.textContent = 140;
    counterNumber.style.color = 'black';
}

//Función que se desencadena al picarle al botón del formulario que crea los elementos para el nuevo tweet, asigna el contenido del textarea e imprime fecha
function printTweet(e) {
    e.preventDefault();
    var newTweet = document.createElement('div');
    var tweetText = document.createElement('p');
    var timeTweet = document.createElement('span');
    var time = getDate();
    tweetText.textContent = textArea.value;
    timeTweet.textContent = time;
    newTweet.appendChild(tweetText);
    newTweet.appendChild(timeTweet);
    timeLine.prepend(newTweet);
    textArea.value = ''; //preguntar
    button.setAttribute('disabled', 'true');
    button.style.backgroundColor = '#ededed';
};

//Botón desabilitado (se asignó ese atributo en HTML y por eso se establece su color como gris)
button.style.backgroundColor = '#ededed';
//Función para contar caracteres y cambiar el color según el número de caracteres, habilitar el botón si se introducen caracteres a la textarea.
function counter() {
    var characters = textArea.value.split('');
    counterNumber.innerText = 140 - (characters.length);
    if (characters.length >= 120 && characters.length < 130) {
        counterNumber.style.color = '#c4ba48';
    } else if (characters.length >= 130 && characters.length < 140) {
        counterNumber.style.color = 'red';
    } else if (characters.length < 120) {
        counterNumber.style.color = 'black';
    }
    if (characters.length > 0) {
        button.removeAttribute('disabled')
        button.style.backgroundColor = '#61D3F0';
    }
    if (textArea.value == '' || characters.length > 140 || textArea.value.trim().length === 0) {
        button.setAttribute('disabled', 'true');
        button.style.backgroundColor = '#ededed';
    }
}

//Función para obtener la hora con formato hh:mm
function getDate() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var meridian = '';
    if (minutes < 10) {
        minutes = (String(0) + String(minutes));
    }
    if (hours >= 13) {
        hours = hours - 12;
        meridian = 'PM';
    } else {
        meridian = 'AM';
    }
    return hours + ':' + minutes + ' ' + meridian;
}

//Función de autoajuste para la textarea
function resizeTextarea() {

    this.style.height = '24px';
    this.style.height = this.scrollHeight + 12 + 'px'

}
