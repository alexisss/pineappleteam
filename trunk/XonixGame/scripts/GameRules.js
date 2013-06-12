var GameRules = Class.create({
    init: function () { },
    validatePosition: function (cell) {
        // TODO
    },
    hasCollisions: function() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].doesEnemyCollide(i)) {
            return true;
        }
    }

    return false;
    },

    doesEnemyCollide : function (index) {
    var enemy = enemies[index];

    for (var i = 0; i < pathSoFar.length; i++) {
        if (enemy.cell.equals(pathSoFar[i].cell)) {
            return true;
        }
    }

    return false;
    },
    isBorderReached : function (playerPositionCell, playfield) {
        for (var i = 0; i < playfield.length; i++) {
            for (var j = 0; j < playfield[i].length; j++) {
                if ($.inArray(array[i][j], arrayOfCellsForDrow)) {// contains
                    return true;
                }
            }
        }

        return false;
    },
});