const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // función para inicializar al inicio del juego

    // dibujar un rectangulo: x1, y1, ancho, altura
    game.fillRect(0, 0, 100, 100);
    // borra utilizando un rectángulo
    game.clearRect(50, 50, 50, 50);
    game.font = '25px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'center';
    game.fillText('Platzi', 100, 100);
    
}