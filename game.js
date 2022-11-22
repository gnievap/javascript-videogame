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
    
    const map = maps[2];
    const mapRows =  map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log(maps, mapRows, mapRowCols);

    for (let row = 1; row <= 10; row++){
        for ( let col = 1; col <= 10; col++ ){
            //game.fillText(emojis['X'], elementsSize * col, elementsSize * row);
            game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
        }   
    }
}
