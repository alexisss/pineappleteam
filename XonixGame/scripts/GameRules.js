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

    decreaseLived: function()
    {
        this.lives--;
    },

    hasWon: function () {
        if (this.playfield.calculatePoints() > 1700) {
            return true;
        }
        return false;
    }
});