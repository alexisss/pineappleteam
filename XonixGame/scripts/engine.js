var playfield = new Playfield();
var player = new Player(); //+ name
var enemies = new Array(new Enemy());
var pathSoFar = new Array();

//this must be moved
$("body").keydown(function (e) {
    if (e.keyCode == 37) { // left
        player.moveLeft();
        playfield.array[player.top, player.left].color = "purple"; //or something like that
        pathSoFar.push(playfield.array[player.top, player.left]);
    }
    else if (e.keyCode == 38) { // up
        player.moveUp();
        playfield.array[player.top, player.left].color = "purple"; //or something like that
        pathSoFar.push(playfield.array[player.top, player.left]);
    }
    else if (e.keyCode == 39) { // right
        player.moveRight();
        playfield.array[player.top, player.left].color = "purple"; //or something like that
        pathSoFar.push(playfield.array[player.top, player.left]);
    }
    else if (e.keyCode == 40) { // down
        player.moveDown();
        playfield.array[player.top, player.left].color = "purple"; //or something like that
        pathSoFar.push(playfield.array[player.top, player.left]);
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

function hasCollisions() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].doesEnemyCollide(i)) {
            return true;
        }
    }

    return false;
}

function doesEnemyCollide(index) {
    var enemy = enemies[index];

    for (var i = 0; i < pathSoFar.length; i++) {
        if (enemy.cell.equals(pathSoFar[i].cell)) {
            return true;
        }
    }

    return false;
}

function fillPath() {
    //TODO: implement this method
}

function update() {
    if (hasCollisions()) {
        resetCurrent();
    }
    else {
        fillPath();
    }
}