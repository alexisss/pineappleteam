﻿/// <reference path="Playfield.js" />
var GameDrower = Class.create({
    init: function () {
        this.canvas = $("#playfield")[0];
        this.ctx = this.canvas.getContext("2d");
    },
    drowCell: function (cell) {
        
        this.ctx.beginPath();
        this.ctx.moveTo(cell.position.leftPosition, cell.position.topPosition);
        this.ctx.fillStyle = cell.color;
        this.ctx.fillRect(cell.position.leftPosition, cell.position.topPosition, cell.width, cell.height);
        this.ctx.closePath();
        this.ctx.stroke();
    },
    drowField: function (playfield) {
        for (var row = 0; row < parseInt(this.canvas.width) / 14; row++) {
            for (var col = 0 ; col < (parseInt(this.canvas.height) / 10) ; col++) {
                if (playfield.array[row][col].isSown) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(playfield.array[row][col].position.leftPosition, playfield.array[row][col].position.topPosition);
                    this.ctx.fillStyle = playfield.array[row][col].color;
                    this.ctx.fillRect(playfield.array[row][col].position.leftPosition, playfield.array[row][col].position.topPosition,
                        playfield.array[row][col].width, playfield.array[row][col].height);
                    this.ctx.closePath();
                    this.ctx.stroke();
                }
            }
        }
    },
    drowSubField :function(arrayOfCell)
    {
        for (var i = 0; i < arrayOfCell.length; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(arrayOfCell[i].position.leftPosition, arrayOfCell[i].position.topPosition);
            this.ctx.fillStyle = arrayOfCell[i].color;
            this.ctx.fillRect(arrayOfCell[i].position.leftPosition, arrayOfCell[i].position.topPosition,
                arrayOfCell[i].width, arrayOfCell[i].height);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    },
    clearCurrentPath: function (currentPath) {
        for (var i = 0; i < currentPath.length; i++) {
            this.ctx.moveTo(currentPath[i].position.leftPosition, currentPath[i].position.topPosition);
            this.ctx.clearRect(currentPath[i].position.leftPosition, currentPath[i].position.topPosition,
                currentPath[i].width, currentPath[i].height);
            this.ctx.stroke();
        }
    },
    clearAll: function () {
        this.ctx.clearRect(0, 0, parseInt(this.canvas.width), parseInt(this.canvas.height));
        this.ctx.stroke();
    },
});
//var gd = new GameDrower();
// need a cell
//var cTopLeft = new CellTopLeft(1,3);
//var celll = new Cell(cTopLeft, "red");
//gd.drowCell(celll);
//gd.clearCurrentPath([celll]);