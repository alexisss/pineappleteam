var Playfield = Class.create({
    init: function () {
        //this.arrayOfCells = arrayOfCells;
        this.array = [];// 50 elements
        var canvas = document.getElementById("playfield");
        for (var i = 0; i < parseInt(canvas.width) / 14; i++) {

            array.push( new Array(parseInt(canvas.height) / 10));
        }

        for (var row = 0; row < parseInt(canvas.width) / 14; row++) {
            for (var col = 0 ; col < (parseInt(canvas.height) / 10) ; col++)
            {
                var currentCellTopLeft = new CellTopLeft(col * 14, row * 10);
                var currentCell = new Cell(currentCellTopLeft, "blue");
                this.array[row][col] = currentCell;
            }
        }
        console.log(this.array[1][1].position.isSown);
    },
    sow: function (arrayOfCellsForDrow) {
        for (var i = 0; i < canvas.width / 14; i++) {
            for (var j = 0; j < canvas.height / 10; j++) {
                if ($.inArray(array[i][j], arrayOfCellsForDrow)) {
                    this.array[i][j].isSown = true;
                }
            }
        }
    },
});
//var pl = new Playfield();