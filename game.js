const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Definir el tamaño del canvas
    if ( window.innerHeight > window.innerWidth ){
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = (canvasSize / 10) - 2;

    startGame();
}

function startGame(){
    // función para inicializar el juego

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'center';
    
    for (let i = 1; i <= 10; i++){
        for ( let j = 1; j <= 10; j++ ){
            game.fillText(emojis['X'], elementsSize * i, elementsSize * j);
        }   
    }
}
