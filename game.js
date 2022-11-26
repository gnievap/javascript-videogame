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

const giftPosition = {
    x: undefined,
    y: undefined,
};

let enemyPositions = [];

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

    enemyPositions = [];
    game.clearRect(0, 0, canvasSize, canvasSize);

    mapRowCols.forEach( (row,rowI ) => {
        row.forEach( (col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if ( col == 'O'){
                if ( !playerPosition.x && !playerPosition.y ){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({playerPosition});
                }
            }
            else if ( col == 'I' ){
                    giftPosition.x = posX;
                    giftPosition.y = posY;
                    console.log({giftPosition});
            } else if ( col == 'X' ) {
                enemyPositions.push( {
                    x: posX,
                    y: posY,
                });
                console.log({enemyPositions});
            }
            

            game.fillText(emoji, posX, posY);
        });
    });
    
    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    console.log( giftCollisionX );
    console.log( giftCollisionY );
    if ( giftCollision ){
        console.log('Subiste de nivel!!!');
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY; 
    }); 

    if ( enemyCollision ) {
        console.log('Chocaste contra un enemigo :(');
    }

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
    if ( (playerPosition.y - elementsSize) <  0 ){  // < elementsSize 
        console.log("Posición de coordenada fuera del mapa");
    }
    else {
        playerPosition.y -= elementsSize;
        movePlayer();
        startGame();
    }

}

function moveLeft(){
    console.log('Izquierda');
    if ( (playerPosition.x - elementsSize) <  elementsSize ){  // < elementsSize 
        console.log("Posición de coordenada fuera del mapa");
    }
    else {
        playerPosition.x -= elementsSize;
        startGame();
        }
}

function moveRight(){
    console.log('Derecha');
    if ( (playerPosition.x + elementsSize) > canvasSize){  // < elementsSize 
        console.log("Posición de coordenada fuera del mapa");
    }
    else {
        playerPosition.x += elementsSize;
        startGame();
    }
    }

function moveDown(){
    console.log('Abajo');

    if ( (playerPosition.y + elementsSize) > canvasSize){  // < elementsSize 
        console.log("Posición de coordenada fuera del mapa");
    }
    else {
        playerPosition.y += elementsSize;
        startGame();
    }
}