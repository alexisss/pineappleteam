var Enemy = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.radius = 10;
        this.x = 14;
        this.y = 10;
    },

    moveTopRight: function () {
        var newLeft = this.position.leftPossition + this.x;
        var newTop = this.position.topPossition + this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(rowIndex, colIndex)) {
            x = x;
            y = y;
        }
        changePosition();
    },

    moveBottomLeft: function () {
        var newLeft = this.position.leftPossition + this.x;
        var newTop = this.position.topPossition + this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(new CellTopLeft(this.position.leftPossition - this.x, this.position.topPossition - this.y))) {
            х = х * (-1);
            y = y * (-1);
        }

        changePosition();
    },

    moveTopLeft: function (playfield) {
        var newLeft = this.position.leftPossition + this.x;
        var newTop = this.position.topPossition;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition > 0 && !playfield.isSown(rowIndex, colIndex) ) {
            this.position.leftPosition += this.x / 2;
        }
        //var newLeft = this.position.leftPossition + this.x;
        //var newTop = this.position.topPossition + this.y;
        //var colIndex = parseInt((newLeft) / 14);
        //var rowIndex = parseInt((newTop) / 10);
        //if (!playfield.isSown(new CellTopLeft(this.position.leftPossition - this.x, this.position.topPossition + this.y))) {
        //    х = х * (-1);
        //}

        //changePosition();
    },

    moveBottomRight: function () {
        var newLeft = this.position.leftPossition + this.x;
        var newTop = this.position.topPossition - this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(rowIndex, colIndex)) {
            y = y * (-1);
        }

        changePosition();
        
    },

    move: function (playfield) {
        //var direction = getRandomInt(1, 4);
        //switch (direction) {
        //    case 1:
        //        this.moveTopRight();
        //        break;
        //    case 2:
        //        this.moveBottomLeft();
        //        break;
        //    case 3:
        //        this.moveTopRight();
        //        break;
        //    case 4:
        //        this.moveBottomLeft();
        //        break;
        //    default:
        //        break;
        //}
        this.moveTopLeft(playfield);
    }
});

function changePosition() {
    this.position.leftPossition += x;
    this.position.leftPossition += y;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
