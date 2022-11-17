const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // función para inicializar al inicio del juego

    // Definir el tamaño del canvas
    let canvasSize;

    if ( window.innerHeight > window.innerWidth ){
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = (canvasSize / 10) - 1;

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';
    
    for (let i = 1; i <= 10; i++){
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
    


    /*
    // dibujar un rectangulo: x1, y1, ancho, altura
    game.fillRect(0, 0, 100, 100);
    // borra utilizando un rectángulo
    game.clearRect(50, 50, 50, 50);
    game.font = '25px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'center';
    game.fillText('Platzi', 100, 100);*/
    
}