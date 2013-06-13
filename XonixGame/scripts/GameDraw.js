/// <reference path="Playfield.js" />
var GameDraw = Class.create({
    init: function () {
        this.canvas = $("#playfield")[0];
        this.ctx = this.canvas.getContext("2d");
    },

    drawCell: function (cell) {

        this.ctx.beginPath();
        this.ctx.moveTo(cell.position.leftPosition, cell.position.topPosition);
        this.ctx.fillStyle = cell.color;
        this.ctx.fillRect(cell.position.leftPosition, cell.position.topPosition, cell.width, cell.height);
        this.ctx.closePath();
        this.ctx.stroke();
    },

    drawField: function (playfield) {
        for (var row = 0; row < (parseInt(this.canvas.height) / 10) ; row++) {
            for (var col = 0 ; col < parseInt(this.canvas.width) / 14; col++) {
                if (playfield.array[row][col].isSown) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(playfield.array[row][col].position.leftPosition,
                        playfield.array[row][col].position.topPosition);
                    this.ctx.fillStyle = playfield.array[row][col].color;
                    this.ctx.fillRect(playfield.array[row][col].position.leftPosition,
                        playfield.array[row][col].position.topPosition,
                        playfield.array[row][col].width, playfield.array[row][col].height);
                    this.ctx.closePath();
                    this.ctx.stroke();
                }
            }
        }
    },

    drawEnemy: function (player) {
        this.ctx.beginPath();
        this.ctx.arc(player.position.leftPosition + 7, player.position.topPosition + 5, player.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = enemy.color;
        this.ctx.fill();
        this.ctx.closePath();
    },

    drawPlayer: function (enemy) {
        this.ctx.beginPath();
        this.ctx.arc(enemy.position.leftPosition + 7, enemy.position.topPosition + 5, enemy.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = player.color;
        this.ctx.fill();
        this.ctx.closePath();
    },

    draw: function (player, playfield, enemy) {
        this.drawField(playfield);
        this.drawEnemy(enemy);
        this.drawPlayer(player);
    },

    clearAll: function () {
        this.ctx.clearRect(0, 0, parseInt(this.canvas.width), parseInt(this.canvas.height));
        //this.ctx.stroke();
    },
});