var playfield = new Playfield();
var player = new Player(); //+ name
var enemies = new Array(new Enemy());
var pathSoFar = new Array();
var gameRules = new GameRules();
var gameDrower = new gameDrower();

//this must be moved


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
        playfield.seedCell(subField);
        gameDrower.drawSubField(subField);
    } else if (true) {
        //TODO - check for game end 
    }
}