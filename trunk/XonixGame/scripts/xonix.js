var gameDraw = new GameDraw();
//var playfield = new Playfield(gameDraw.canvas.width, gameDraw.canvas.height);
var playfield = PlayfieldModule.Playfield(gameDraw.canvas.width, gameDraw.canvas.height);
var canvasWidth = gameDraw.canvas.width;
var canvasHeight = gameDraw.canvas.height;
var cellWidth = 14;
var cellHeight = 10;

var playerPosition = new CellTopLeft(0, 60);
var player = PlayerModule.GrandPa(playerPosition);

var enemyPosition = new CellTopLeft(210, 120);
var enemy = EnemyModule.createEnemy(enemyPosition, "red", gameDraw.canvas.width, gameDraw.canvas.height);

var secondEnemyPosition = new CellTopLeft(112, 150);
var secondEnemy = EnemyModule.createEnemy(secondEnemyPosition, "red", gameDraw.canvas.width, gameDraw.canvas.height);

var enemies = [];
enemies.push(enemy);
enemies.push(secondEnemy);

gameDraw.drawField(playfield);
var gameRules = new GameRules(player, enemies, playfield);

function askForName() {
    //var name = $("user-name").first().html(); - something like that 
    var name = "me";
    return name;
}

var time = 0;
var int = setInterval(function () {

    if (gameRules.hasWon()) {

        var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
        window.open(sharer + location.href, 'sharer', 'width=626,height=436');
        int = window.clearInterval(int);
        var seconds = time / 1000;
        var name = askForName();
        localStorage.setItem(name, seconds);
        console.log(localStorage);
    }
    else if (gameRules.hasLost()) {
        //do something else
    }
    else {

        for (var i = 0; i < enemies.length; i++) {
            enemies[i].move(playfield);
        }

        gameDraw.clearAll();
        gameDraw.draw(player, playfield, enemies);
    }
    time += 50;
}, 50);

function seedVisitedCell(curretPlayer) {
    var colIndex = parseInt((curretPlayer.position.leftPosition) / 14);
    var rowIndex = parseInt((curretPlayer.position.topPosition) / 10);
    playfield.seedCell(rowIndex, colIndex);

}

function changePlayerType(e, data){    
    var type = data.value();
    if (type === "GrandMa") {
        player = PlayerModule.GrandMa(playerPosition, type);
    } else if (type === "GrandPa") {
        player = PlayerModule.GrandPa(playerPosition, type);
    }
}

$("body").keydown(function (e) {

    if (e.keyCode == 37) { // left   
        player.moveLeft(cellWidth);
        seedVisitedCell(player);
        gameRules.checkForCollisions();
    }
    else if (e.keyCode == 38) {
        player.moveUp(cellHeight);
        seedVisitedCell(player);
        gameRules.checkForCollisions();
    }
    else if (e.keyCode == 39) { // right

        player.moveRight(cellWidth, gameDraw.canvas.width);
        seedVisitedCell(player);
        gameRules.checkForCollisions();
    }
    else if (e.keyCode == 40) { // down
        player.moveDown(cellHeight, gameDraw.canvas.height);
        seedVisitedCell(player);
        gameRules.checkForCollisions();
    }
});
