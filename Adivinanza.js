const generarNumeroAleatorio = () => {
return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
    console.log('¡Felicitaciones! ¡Haz adivinado el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue participando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue participando!');
    }
};

module.exports = { generarNumeroAleatorio, verificarAdivinanza };