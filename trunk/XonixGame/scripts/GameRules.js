var GameRules = Class.create({
    init: function () { },
    validatePosition: function (cell) {
        // TODO if player can not muve do nothing
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
        for (var i = 0; i < playfield.array.length; i++) {
            for (var j = 0; j < playfield.array[i].length; j++) {
                if (playfield.array[i][j].position.leftPosition === playerPositionCell.position.leftPosition &&
                        playfield.array[i][j].position.topPosition === playerPositionCell.position.topPosition) {
                    return true;
                }
            }
        }

        return false;
    },
    isPlayerStepOnHisPath: function (playerPositionCell, pathSoFar) {
        for (var i = 0; i <pathSoFar.length; i++) {
            if (playerPositionCell.position.leftPosition === pathSoFar[i].position.leftPosition &&
                playerPositionCell.position.topPosition === pathSoFar[i].position.topPosition) {
                return true;
            }
        }

        return false;
    },
    isGameWin: function (playfield) {
        if (playfield.calculatePoints() > 1700) {
            return true;
        }
        return false;
    }
});