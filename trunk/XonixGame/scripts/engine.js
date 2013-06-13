var playfield = new Playfield();
var player = new Player(); //+ name
var enemies = new Array(new Enemy());
var pathSoFar = new Array();
var gameRules = new GameRules();
var gameDrower = new gameDrower();

//this must be moved
$("body").keydown(function (e) {
    
    if (e.keyCode == 37) { // left   
        var currentCell = new Cell(player.cell.X - 14, player.cell.Y);
        // calculating the positions where the player will go can be done in 
        // player class  so here instead of  new Cell(player.cell.X + 14, player.cell.Y + 10);
        // we can have new Cell(player.nextStepX , player.nextStepY; or only player.CellToBeMovedOn
        if (gameRules.validatePosition(currentCell)) {
            player.moveLeft();
            pathSoFar.push(currentCell);
            gameDrower.drawCell(currentCell);
          } 
        }
    else if (e.keyCode == 38) { // up
        var currentCell = new Cell(player.cell.X, player.cell.Y - 10);
        if (gameRules.validatePosition(currentCell)) {
            player.moveUp();
            pathSoFar.push(currentCell);
            gameDrower.drawCell(currentCell);
        }            
        }
    else if (e.keyCode == 39) { // right
        var currentCell = new Cell(player.cell.X +14 , player.cell.Y );
        if (gameRules.validatePosition(currentCell)) {
            player.moveRight();
            pathSoFar.push(currentCell);
            gameDrower.drawCell(currentCell);
        }
        }
    else if (e.keyCode == 40) { // down
        var currentCell = new Cell(player.cell.X , player.cell.Y + 10);
        if (gameRules.validatePosition(currentCell)) {
            player.moveDown();
            pathSoFar.push(currentCell);
            gameDrower.drawCell(currentCell);
        }
        }
});

function resetCurrent() {
    player.cell = initialCell;
}

function resetAll() {
    playfield = new Playfield();
    player = new Player(); //+ name
    enemies = new Array(new Enemy());
    pathSoFar = new Array();
}

//TODO
function update() {
    if (gameRules.hasCollisions() || gameRules.isPlayerStepOnHisPath) {
        resetCurrent();
    } else if (gameRules.isBorderReached) {
        //TODO method for calculating subfield to be drown
        // subField must be an array of cells (containing pathSoFar and inner cells)
        playfield.sow(subField);
        gameDrower.drawSubField(subField);
    } else if (true) {
        //TODO - check for game end 
    }
}