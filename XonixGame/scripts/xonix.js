var gameDraw = new GameDraw();
var playfield = new Playfield(gameDraw.canvas.width, gameDraw.canvas.height);
var canvasWidth = gameDraw.canvas.width;
var canvasHeight = gameDraw.canvas.height;
var cellWidth = 14;
var cellHeight = 10;

var ct1 = new CellTopLeft(0, 0);
var ct2 = new CellTopLeft(14, 10);
var ct3 = new CellTopLeft(28, 10);
var ct10 = new CellTopLeft(56, 10);
var c1 = new Cell(ct1, "red");
var c2 = new Cell(ct2, "red");
var c3 = new Cell(ct3, "purple");
var c10 = new Cell(ct10, "green");
var arr = new Array(c1, c2, c3, c10);
playfield.seedArrayOfCells(arr);

var ct4 = new CellTopLeft(28, 10);
var playerCell = new Cell(ct4, "red");

var playerPosition = new CellTopLeft(0, 0);
var player = new Player(playerPosition);

var enemyPosition = new CellTopLeft(150, 150);
var enemy = new Enemy(enemyPosition);

gameDraw.drawField(playfield);
var gameRules = new GameRules(player, enemy, playfield);

setInterval(function () {
    if (gameRules.hasWon()) {
        //do something
    }
    else if (gameRules.hasLost()) {
        //do something else
    }
    else {
        // enemy.Move();
        gameDraw.clearAll();
        gameDraw.draw(player, playfield, enemy);
    }
}, 50);

function seedVisitedCell(curretPlayer) {
    var colIndex = parseInt((curretPlayer.position.leftPosition) / 14);
    var rowIndex = parseInt((curretPlayer.position.topPosition) / 10);
    playfield.seedCell(rowIndex, colIndex);
}

$("body").keydown(function (e) {

    if (e.keyCode == 37) { // left   
        player.moveLeft(cellWidth);
        seedVisitedCell(player);
    }
    else if (e.keyCode == 38) {
        player.moveUp(cellHeight);
        seedVisitedCell(player);

    }
    else if (e.keyCode == 39) { // right

        player.moveRight(cellWidth, gameDraw.canvas.width);
        seedVisitedCell(player);

    }
    else if (e.keyCode == 40) { // down
        player.moveDown(cellHeight, gameDraw.canvas.height);
        seedVisitedCell(player);
    }
});