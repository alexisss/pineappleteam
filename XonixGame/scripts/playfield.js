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

        //for (var i = 0; i < parseInt(canvasWidth) / cellWidth; i++) {

        //    this.array.push(new Array(parseInt(canvasHeight) / this.cellHeight));
        //}

        for (var row = 0; row < parseInt(canvasHeight) / this.cellHeight ; row++) {
            this.array.push(new Array());
            for (var col = 0 ; col < parseInt(canvasWidth) / this.cellWidth; col++)
            {
                var currentCellTopLeft = new CellTopLeft(col * this.cellWidth, row * this.cellHeight);
                var currentCell = new Cell(currentCellTopLeft, "green");
                //this.array[row][col] = currentCell;
                this.array[row].push(currentCell);
            }
        }
    },

    seedArrayOfCells: function (arrayOfCellsForDraw) {
       
        for (var i = 0; i < parseInt(this.canvas.height) / this.cellHeight; i++) {
            for (var j = 0; j <  parseInt(this.canvas.width) / this.cellWidth; j++) {
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
    seedCell : function myfunction(row, col) {
        if (row >= 0 && row < this.array.length) {
            if (col >= 0 && col < this.array[row].length) {
                this.array[row][col].isSown = true;
                this.filledCellsCounter++;
            }
        }
    },
    //Added because of the enemy, so that it knows if the cell is sown or not
<<<<<<< .mine
    isSown: function (topLeftPosition) {
        return this.array[topLeftPosition.leftPosition][topLeftPosition.topPosition].isSown;      
=======
    isSown: function (row, col) {
        if (row >= 0 && row < this.array.length) {
            if (col >= 0 && col < this.array[row].length) {
                return this.array[row][col].isSown;
            }
        }
>>>>>>> .r35
    },

    calculatePoints: function () {
        return this.filledCellsCounter;
    }

});
