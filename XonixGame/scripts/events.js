﻿var userControl = function (e) {

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
};

var onReset =function () {
    reset();
};

var onLevel = function (e) {
    if (e.currentTarget.defaultValue == "Easy") {
        enemies = [];
        enemies.push(enemy);
    }
    if (e.currentTarget.defaultValue == "Medium") {
        enemies = [];
        enemies.push(enemy);
        enemies.push(secondEnemy);
    }
    if (e.currentTarget.defaultValue == "Hard") {
        enemies = [];
        enemies.push(enemy);
        enemies.push(secondEnemy);
        enemies.push(thirdEnemy);
    }
};

$("body").on("keydown", userControl);
$("#reset-button").on("click", onReset);
$(".difficulty").on("click", onLevel);
