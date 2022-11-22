const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');


let canvasSize;
let elementsSize;

const playerPosition = {
    x: undefined,
    y: undefined,
}

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
    
    const map = maps[0];
    const mapRows =  map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({maps, mapRows, mapRowCols});

  /*  for (let row = 1; row <= 10; row++){
        for ( let col = 1; col <= 10; col++ ){
            //game.fillText(emojis['X'], elementsSize * col, elementsSize * row);
            game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
        }   
    }*/

    mapRowCols.forEach( (row,rowI ) => {
        row.forEach( (col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if ( col == 'O'){
                /*console.log('Aquí debe ir el jugador');
                console.log( { posX, posY }); */
                playerPosition.x = posX;
                playerPosition.y = posY;
                console.log({playerPosition});
            }

            game.fillText(emoji, posX, posY);
        });
    });
    
    movePlayer();
}

function movePlayer(){
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);

btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);


function moveByKeys(event){
   // console.log(event);
   if ( event.key == 'ArrowUp') moveUp();
   else if (event.key == 'ArrowLeft') moveLeft();
   else if (event.key == 'ArrowRight') moveRight();
   else if (event.key == 'ArrowDown') moveDown();
}

function moveUp(){
    console.log('Arriba');
    playerPosition.y -= elementsSize;
    movePlayer();
}

function moveLeft(){
    console.log('Izquierda');
}

function moveRight(){
    console.log('Derecha');
}

function moveDown(){
    console.log('Abajo');
}