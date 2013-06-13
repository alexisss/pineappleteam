var Enemy = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.radius = 10;
        this.x = 1;
        this.y = 1;
    },

    moveTopRight: function() {

        if (!playfield.isSown(new CellTopLeft(this.position.leftPossition + this.x, this.position.topPossition + this.y))) {
            x = x;
            y = y;
        }

        changePosition();
    },

    moveBottomLeft: function(){
        if (!playfield.isSown(new CellTopLeft(this.position.leftPossition - this.x, this.position.topPossition - this.y))) {
            х = х * (-1);
            y = y * (-1);
        }

        changePosition();
    },

    moveTopLeft: function() {
        if (!playfield.isSown(new CellTopLeft(this.position.leftPossition - this.x, this.position.topPossition + this.y))) {
            х = х * (-1);
        }

        changePosition();
    },

    moveBottomRight: function(){
        if (!playfield.isSown(new CellTopLeft(this.position.leftPossition + this.x, this.position.topPossition - this.y))) {
            y = y * (-1);
        }

        changePosition();
        
    },

    move: function () {
        var direction = getRandomInt(1, 4);
        switch (direction) {
            case 1:
                this.moveTopRight();
                break;
            case 2:
                this.moveBottomLeft();
                break;
            case 3:
                this.moveTopRight();
                break;
            case 4:
                this.moveBottomLeft();
                break;
            default:
                break;
        }
    }
});

function changePosition() {
    this.position.leftPossition += x;
    this.position.leftPossition += y;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
