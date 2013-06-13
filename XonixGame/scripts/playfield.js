/// <reference path="GameDraw.js" />
/// <reference path="player.js" />
var Playfield = Class.create({
    init: function (canvasWidth, canvasHeight) {
        //this.arrayOfCells = arrayOfCells;
        this.array = new Array();// 50 elements
        this.filledCellsCounter = 0;
        this.canvas = document.getElementById("playfield");
        
        this.cellHeight = 10;
        this.cellWidth = 14;

        for (var i = 0; i < parseInt(canvasWidth) / cellWidth; i++) {

            this.array.push(new Array(parseInt(canvasHeight) / this.cellHeight));
        }

        for (var row = 0; row < parseInt(canvasWidth) / this.cellWidth; row++) {
            for (var col = 0 ; col < parseInt(canvasHeight) / this.cellHeight ; col++)
            {
                var currentCellTopLeft = new CellTopLeft(col * this.cellWidth, row * this.cellHeight);
                var currentCell = new Cell(currentCellTopLeft, "green");
                this.array[row][col] = currentCell;
            }
        }
    },

    seedCell: function (row, column) {
       
        for (var i = 0; i < parseInt(canvaswidth) / this.cellWidth; i++) {
            for (var j = 0; j < parseInt(this.canvas.height) / this.cellHeight; j++) {
                var a = this.array[i][j];
                for (var k = 0; k < arrayOfCellsForDraw.length; k++) {
                    if (this.array[i][j].position.leftPosition === arrayOfCellsForDraw[k].position.leftPosition &&
                        this.array[i][j].position.topPosition === arrayOfCellsForDraw[k].position.topPosition) {
                        this.array[i][j].isSown = true;
                        this.filledCellsCounter++;
                    }
                }
            }
        }
    },
    //Added because of the enemy, so that it knows if the cell is sown or not
    isSown: function (topLeftPosition) {
        return this.array[topLeftPosition.leftPosition][topLeftPosition.topPosition].isSown;      
    },

    calculatePoints: function () {
        return this.filledCellsCounter;
    }

});
