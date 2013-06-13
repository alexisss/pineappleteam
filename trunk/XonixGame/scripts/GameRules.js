var GameRules = Class.create({
    init: function (player, enemy, playfield) {
        this.player = player;
        this.enemy = enemy;
        this.playfield = playfield;
        this.lives = 5;
    },

    hasCollisions: function () {
        var collision = false;

        if (this.player.position.leftPosition == this.enemy.position.leftPosition &&
            this.player.position.rightPosition == this.enemy.position.rightPosition) {
            collision = true;
        }

        return collision;
    },

    hasLost: function () {
        return this.lives == 0;
    },

    //isBorderReached: function (playerPositionCell, playfield) {
    //    for (var i = 0; i < playfield.array.length; i++) {
    //        for (var j = 0; j < playfield.array[i].length; j++) {
    //            if (playfield.array[i][j].position.leftPosition === playerPositionCell.position.leftPosition &&
    //                    playfield.array[i][j].position.topPosition === playerPositionCell.position.topPosition) {
    //                return true;
    //            }
    //        }
    //    }

    //    return false;
    //},

    //isPlayerStepOnHisPath: function (playerPositionCell, pathSoFar) {
    //    for (var i = 0; i < pathSoFar.length; i++) {
    //        if (playerPositionCell.position.leftPosition === pathSoFar[i].position.leftPosition &&
    //            playerPositionCell.position.topPosition === pathSoFar[i].position.topPosition) {
    //            return true;
    //        }
    //    }

    //    return false;
    //},

    hasWon: function (playfield) {
        if (playfield.calculatePoints() > 1700) {
            return true;
        }
        return false;
    }
});