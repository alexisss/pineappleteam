var Enemy = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.radius = 10;

    },

    moveTopRight: function() {

        if (!playfield.isSown(new CellTopLeft(position.leftPossition + x, position.topPossition + y))) {
            x = x;
            y = y;
        }

        changePosition();
    } ,
    moveBottomLeft: function(){
        if (!playfield.isSown(new CellTopLeft(position.leftPossition - x, position.topPossition - y))) {
            х = х * (-1);
            y = y * (-1);
        }

        changePosition();
    },
    moveTopLeft: function() {
        if (!playfield.isSown(new CellTopLeft(position.leftPossition - x, position.topPossition + y))) {
            х = х * (-1);
        }

        changePosition();
    },
    moveBottomRight: function(){
        if (!playfield.isSown(new CellTopLeft(position.leftPossition + x, position.topPossition - y))) {
            y = y * (-1);
        }

        changePosition();
        
    }
});

function changePosition() {
    this.position.leftPossition += x;
    this.position.leftPossition += y;
}