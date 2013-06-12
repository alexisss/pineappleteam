/// <reference path="GameDrower.js" />
var Playfield = Class.create({
    init: function () {
        //this.arrayOfCells = arrayOfCells;
        this.array = [];// 50 elements
        this.fillCellsCounter = 0;
        this.canvas = document.getElementById("playfield");
        for (var i = 0; i < parseInt(this.canvas.width) / 14; i++) {

           this.array.push( new Array(parseInt(this.canvas.height) / 10));
        }

        for (var row = 0; row < parseInt(this.canvas.width) / 14; row++) {
            for (var col = 0 ; col < parseInt(this.canvas.height) / 10 ; col++)
            {
                var currentCellTopLeft = new CellTopLeft(col * 14, row * 10);
                var currentCell = new Cell(currentCellTopLeft, "blue");
                this.array[row][col] = currentCell;
            }
        }
    },
    sow: function (arrayOfCellsForDrow) {
        for (var i = 0; i < parseInt(this.canvas.width) / 14; i++) {
            for (var j = 0; j < parseInt(this.canvas.height) / 10; j++) {
                var a = this.array[i][j];
                for (var k = 0; k < arrayOfCellsForDrow.length; k++) {
                    if (this.array[i][j].position.leftPosition === arrayOfCellsForDrow[k].position.leftPosition &&
                        this.array[i][j].position.topPosition === arrayOfCellsForDrow[k].position.topPosition) {
                        this.array[i][j].isSown = true;
                        this.fillCellsCounter++;
                    }
                }
            }
        }
    },
    calculatePoints: function () {
        return this.fillCellsCounter;
    }
});

// test code
var pl = new Playfield();

var ct1 = new CellTopLeft(0, 0);
var ct2 = new CellTopLeft(14, 10);
var ct3 = new CellTopLeft(28, 10);
var c1 = new Cell(ct1, "blue");
var c2 = new Cell(ct2, "blue");
var c3 = new Cell(ct3, "blue");
var arr = [c1, c2, c3];
pl.sow(arr);
var gd = new GameDrower();
gd.drowField(pl);
var gameRulse = new GameRules();
var ct4 = new CellTopLeft(28, 10);
var playerCell = new Cell(ct4, "blue");
var yes = gameRulse.isBorderReached(playerCell, pl);
console.log(yes);
// step on his path --> ans must be yes
var ct5 = new CellTopLeft(28, 10);
var playerCellStep = new Cell(ct5, "blue");
var ans = gameRulse.isPlayerStepOnHisPath(playerCellStep, [playerCell, playerCellStep]);
console.log(ans);