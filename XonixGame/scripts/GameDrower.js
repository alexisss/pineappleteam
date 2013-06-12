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
        for (var row = 0; row < parseInt(canvas.width) / 14; row++) {
            for (var col = 0 ; col < (parseInt(canvas.height) / 10) ; col++) {
                if (playfield.array[i][j].isSown) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(playfield.array[i][j].position.leftPosition, playfield.array[i][j].position.topPosition);
                    this.ctx.fillStyle = playfield.array[i][j].color;
                    this.ctx.fillRect(playfield.array[i][j].position.leftPosition, playfield.array[i][j].position.topPosition,
                        playfield.array[i][j].width, playfield.array[i][j].height);
                    this.ctx.closePath();
                    this.ctx.stroke();
                }
            }
        }
    },
    drowSubField :function()
    {
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
        this.ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
        this.ctx.stroke();
    }
});
var gd = new GameDrower();
// need a cell
var cTopLeft = new CellTopLeft(1,3);
var celll = new Cell(cTopLeft, "red");
gd.drowCell(celll);
//gd.clearCurrentPath([celll]);