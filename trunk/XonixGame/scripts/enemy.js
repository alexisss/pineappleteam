var Enemy = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.radius = 10;
        this.x = 14;
        this.y = 10;
    },

    moveTopRight: function (playfield) {
        var newLeft = this.position.leftPossition + this.x;
        var newTop = this.position.topPossition + this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition > 0 && !playfield.isSown(rowIndex, colIndex &&
            this.position.topPossition > 0 && !playfield.isSown(colIndex, rowIndex) &&
            this.position.leftPosition < parseInt(playfield.canvas.width) - 14 &&
            this.position.topPossition > parseInt(playfield.canvas.height) - 10)) {

            this.position.leftPosition += this.x / 2;
            this.position.topPossition += this.y / 2;
        }
    },

    moveBottomLeft: function (playfield) {
        var newLeft = this.position.leftPossition - this.x;
        var newTop = this.position.topPossition - this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition > 0 && !playfield.isSown(rowIndex, colIndex) &&
            this.position.topPossition > 0 && !playfield.isSown(colIndex, rowIndex)) {
            this.position.leftPosition -= this.x / 2;
            this.position.topPossition -= this.y / 2;
        }
    },

    moveTopLeft: function (playfield) {
        var newLeft = this.position.leftPossition - this.x;
        var newTop = this.position.topPossition;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition > 0 && !playfield.isSown(rowIndex, colIndex) ) {
            this.position.leftPosition -= this.x / 2;
        }        
    },

    moveBottomRight: function (playfield) {
        var newLeft = this.position.leftPossition;
        var newTop = this.position.topPossition - this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.TopPosition > 0 && !playfield.isSown(rowIndex, colIndex)) {
            this.position.TopPosition -= this.y / 2;
        }
    },

    move: function (playfield) {
       var direction = getRandomInt();
       switch (direction) {
           case 0:
               this.moveTopRight(playfield);
               break;
           case 1:
               this.moveBottomLeft(playfield);
               break;
           case 2:
               this.moveTopRight(playfield);
               break;
           case 3:
               this.moveBottomLeft(playfield);
               break;
           default:
               break;
       }        
    }
});

function getRandomInt() {
    return Math.floor(Math.random() * 4);
}
