var gameDraw = new GameDraw();
var playfield = PlayfieldModule.Playfield(gameDraw.canvas.width, gameDraw.canvas.height);

var canvasWidth = gameDraw.canvas.width;
var canvasHeight = gameDraw.canvas.height;
var cellWidth = 14;
var cellHeight = 10;

var playerPosition = new CellTopLeft(14, 60);
var player = PlayerModule.GrandPa(playerPosition);

var enemyPosition = new CellTopLeft(210, 120);
var enemy = EnemyModule.createEnemy(enemyPosition, "red",canvasWidth, canvasHeight);

var secondEnemyPosition = new CellTopLeft(112, 150);
var secondEnemy = EnemyModule.createEnemy(secondEnemyPosition, "purple", canvasWidth, canvasHeight);

var thirdEnemyPosition = new CellTopLeft(228, 180);
var thirdEnemy = EnemyModule.createEnemy(thirdEnemyPosition, "orange", canvasWidth, canvasHeight);
var enemies = [];
enemies.push(enemy);
//enemies.push(secondEnemy);

gameDraw.drawField(playfield);

var time = 0;
var gameRules = new GameRules(player, enemies, playfield);

function askForName() {
    //var name = $("user-name").first().html(); - something like that 
    var name = "me";
    return name;
}


function reset() {
    player.reset(new CellTopLeft(14, 60));
    playfield.reset();
    enemies = [];
    enemies.push(enemy);
    $(".difficulty")[0].checked = "checked";
    time = 0;
}

var int = setInterval(function () {
    //if (gameRules.hasWon()) {
    //    //var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
    //    //window.open(sharer + location.href, 'sharer', 'width=626,height=436');
    //    int = window.clearInterval(int);
    //    var seconds = time / 1000;
    //    var name = askForName();
    //    reset();
    //    localStorage.setItem(name, seconds);
    //    console.log(localStorage);
    //}
    //else if (gameRules.hasLost()) {
    //    //do something else
    //}
    //else {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].move(playfield);
        }

        gameDraw.clearAll();
        gameDraw.draw(player, playfield, enemies);
        gameDraw.drawLives(player.lives);
        if (gameRules.hasWon()) {
            gameDraw.drawWin();
            reset();
        }
    //}
    time += 50;
}, 50);

function seedVisitedCell(curretPlayer) {
    var colIndex = parseInt((curretPlayer.position.leftPosition) / 14);
    var rowIndex = parseInt((curretPlayer.position.topPosition) / 10);
    playfield.seedCell(rowIndex, colIndex);

}

function changePlayerType(e, data) {
    var type = data.value();
    if (type === "GrandMa") {
        player = PlayerModule.GrandMa(playerPosition, type);
    } else if (type === "GrandPa") {
        player = PlayerModule.GrandPa(playerPosition, type);
    }
}