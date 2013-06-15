var PlayfieldModule = (function ($) {

var Cell = Class.create({
     init: function (position, color) {
         this.position = position;
         this.color = color;
         this.width = 14;
         this.height = 10;
         this.isSown = false;
     },
});

var Playfield = Class.create({
    init: function (canvasWidth, canvasHeight) {

        this.array = new Array();
        this.filledCellsCounter = 0;
        this.canvas = $("playfield");
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.cellHeight = 10;
        this.cellWidth = 14;

        for (var row = 0; row < parseInt(this.canvasHeight) / this.cellHeight ; row++) {
            this.array.push(new Array());
            for (var col = 0 ; col < parseInt(this.canvasWidth) / this.cellWidth; col++) {
                var currentCellTopLeft = new CellTopLeft(col * this.cellWidth, row * this.cellHeight);
                var currentCell = new Cell(currentCellTopLeft, "green");

                this.array[row].push(currentCell);
            }
        }

        this.array[0][0].isSown = true;
        this.seedBorder();
    },

    seedCell: function myfunction(row, col) {
        if (row >= 0 && row < this.array.length) {
            if (col >= 0 && col < this.array[row].length) {
                this.array[row][col].isSown = true;
                this.filledCellsCounter++;
            }
        }
    },

    isSown: function (row, col) {
        if (row >= 0 && row < this.array.length) {
            if (col >= 0 && col < this.array[row].length) {
                return this.array[row][col].isSown;
            }
        }
    },

    calculatePoints: function () {
        return this.filledCellsCounter;
    },

    seedBorder : function () {
            var top = 6;// player height 6
            var bottom = (this.canvasHeight - 60)/10; // from 34 rows to 40
            var left = 2;//2 colls
            var right = (this.canvasWidth - 42)/14;//from 47 to 50

            // seed top border
            for (var row = 0; row < top; row++) {
                for (var col = 0; col < parseInt(this.canvasWidth) / this.cellWidth; col++) {
                    this.seedCell(row, col);
                }
            }

            // seed bottom border
            for (var row = bottom; row < parseInt(this.canvasHeight) / this.cellHeight  ; row++) {
                for (var col = 0; col < parseInt(this.canvasWidth) / this.cellWidth; col++) {
                    this.seedCell(row, col);
                }
            }

            // seed left border
            for (var row = 0; row < parseInt(this.canvasHeight) / this.cellHeight  ; row++) {
                for (var col = 0; col < left; col++) {
                    this.seedCell(row, col);
                }
            }

            // seed left border
            for (var row = 0; row < parseInt(this.canvasHeight) / this.cellHeight  ; row++) {
                for (var col = right; col < parseInt(this.canvasWidth) / this.cellWidth; col++) {
                    this.seedCell(row, col);
                }
            }
        },
});

return {
    Playfield: function (canvasWidth, canvasHeight) {
        return new Playfield(canvasWidth, canvasHeight);
    },
    Cell: function (position, color) {
        return new Cell(position, color);
    },
}
}(jQuery));
