﻿var gameDraw = new GameDraw();
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
//playfield.seedArrayOfCells(arr);

var ct4 = new CellTopLeft(28, 10);
var playerCell = new Cell(ct4, "red");

var playerPosition = new CellTopLeft(0, 0);
var player = PlayerModule.GrandMa(playerPosition);


var userPalyerChoise = $("#player")[0];
userPalyerChoise.addEventListener("click", function (ev) {
    var button = ev.target;
    if (button.value === "GrandMa") {
        player = PlayerModule.GrandMa(playerPosition);
    } else if (button.value === "GrandPa") {
        player = PlayerModule.GrandPa(playerPosition);
    }
}, false);


var enemyPosition = new CellTopLeft(14, 0);
var enemy = EnemyModule.createEnemy(enemyPosition, "red");

var secondEnemyPosition = new CellTopLeft(14, 150);
var secondEnemy = EnemyModule.createEnemy(secondEnemyPosition, "red");

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
