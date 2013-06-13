/// <reference path="GameDraw.js" />
var Playfield = Class.create({
    init: function () {
        //this.arrayOfCells = arrayOfCells;
        this.array = new Array();// 50 elements
        this.filledCellsCounter = 0;
        this.canvas = document.getElementById("playfield");
        
        this.cellHeight = 10;
        this.cellWidth = 14;

        for (var i = 0; i < parseInt(this.canvas.width) / this.cellWidth; i++) {

            this.array.push(new Array(parseInt(this.canvas.height) / this.cellHeight));
        }

        for (var row = 0; row < parseInt(this.canvas.width) / this.cellWidth; row++) {
            for (var col = 0 ; col < parseInt(this.canvas.height) / this.cellHeight ; col++)
            {
                var currentCellTopLeft = new CellTopLeft(col * this.cellWidth, row * this.cellHeight);
                var currentCell = new Cell(currentCellTopLeft, "green");
                this.array[row][col] = currentCell;
            }
        }
    },

    sow: function (arrayOfCellsForDraw) {
        for (var i = 0; i < parseInt(this.canvas.width) / this.cellWidth; i++) {
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

// test code
var playfield = new Playfield();

var ct1 = new CellTopLeft(0, 0);
var ct2 = new CellTopLeft(14, 10);
var ct3 = new CellTopLeft(28, 10);
var ct10 = new CellTopLeft(56, 10);
var c1 = new Cell(ct1, "red");
var c2 = new Cell(ct2, "red");
var c3 = new Cell(ct3, "purple");
var c10 = new Cell(ct10, "green");
var arr = new Array(c1, c2, c3, c10);
playfield.sow(arr);

var gameDraw = new GameDraw();
gameDraw.drawField(playfield);
var gameRulse = new GameRules();
var ct4 = new CellTopLeft(28, 10);
var playerCell = new Cell(ct4, "red");
var yes = gameRulse.isBorderReached(playerCell, playfield);
console.log(yes);
// step on his path --> ans must be yes
var ct5 = new CellTopLeft(28, 10);
var playerCellStep = new Cell(ct5, "red");
var ans = gameRulse.isPlayerStepOnHisPath(playerCellStep, [playerCell, playerCellStep]);
console.log(ans);

