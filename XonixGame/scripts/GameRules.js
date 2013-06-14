var GameRules = Class.create({
    init: function (player, enemies, playfield) {
        this.player = player;
        this.enemies = enemies;
        this.playfield = playfield;
        this.lives = 5;
    },

    checkForCollisions: function()
    {
        if (this.hasCollisions()) {
            this.decreaseLives();
        }
    },

    hasCollisions: function () {
        var collision = false;
       
        for (var i = 0; i < enemies.length; i++) {
            if (this.player.position.leftPosition == this.enemies[i].position.leftPosition &&
                this.player.position.rightPosition == this.enemies[i].position.rightPosition) {
                collision = true;
            }
        }
        return collision;
    },

    hasLost: function () {
        return this.lives == 0;
    },

    decreaseLives: function()
    {
        this.lives--;
    },

    hasWon: function () {
        if (this.playfield.calculatePoints() > 20) {
            return true;
        }
        return false;
    }
});