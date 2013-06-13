/// <reference path="GameDraw.js" />
/// <reference path="player.js" />
var Playfield = Class.create({
    init: function (canvasWidth, canvasHeight) {
        this.array = new Array();// 50 elements
        this.filledCellsCounter = 0;
        this.canvas = document.getElementById("playfield");
        
        this.cellHeight = 10;
        this.cellWidth = 14;

        for (var row = 0; row < parseInt(canvasHeight) / this.cellHeight ; row++) {
            this.array.push(new Array());
            for (var col = 0 ; col < parseInt(canvasWidth) / this.cellWidth; col++)
            {
                var currentCellTopLeft = new CellTopLeft(col * this.cellWidth, row * this.cellHeight);
                var currentCell = new Cell(currentCellTopLeft, "green");
                this.array[row].push(currentCell);
            }
        }
        this.array[0][0].isSown = true;
    },

    seedCell: function myfunction(row, col) {
        this.array[row][col].isSown = true;
        this.filledCellsCounter++;
    },
    //Added because of the enemy, so that it knows if the cell is sown or not
    isSown: function (topLeftPosition) {
        return this.array[topLeftPosition.leftPosition][topLeftPosition.topPosition].isSown;      
    },

    calculatePoints: function () {
        return this.filledCellsCounter;
    }

});
