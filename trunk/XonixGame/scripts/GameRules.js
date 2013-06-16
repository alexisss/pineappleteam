var GameRules = Class.create({
    init: function (player, enemies, playfield) {
        this.player = player;
        this.enemies = enemies;
        this.playfield = playfield;
    },

    checkForCollisions: function () {
        var collision = false;
        var playerHeight = 6;
        for (var i = 0; i < enemies.length; i++) {
            for (var j = 0; j < playerHeight; j++) {
                if (this.player.position.leftPosition === this.enemies[i].position.leftPosition &&
               this.player.position.topPosition - 10*j == this.enemies[i].position.topPosition) {
                    collision = true;
                    this.decreaseLives();
                }
            }
        }

        return collision;
    },

    hasLost: function () {
        return this.palyer.lives <= 0;
    },

    decreaseLives: function()
    {
        this.player.lives--;
    },

    hasWon: function () {
        if (this.playfield.calculatePoints() > 900) {
            return true;
        }
        return false;
    }
});