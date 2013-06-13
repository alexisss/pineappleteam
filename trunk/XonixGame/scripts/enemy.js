var enemy = Class.create({
    init: function (position, color) {
        this.x = 1;
        this.y = 1;
        this.position = position;
        this.color = color;        
    },
    move: function() {
        
        if (!playfield.isSown(new CellTopLeft(position.leftPossition + x, position.topPossition + y))) {
           
        } else if (!playfield.isSown(new CellTopLeft(position.leftPossition - x, position.topPossition + y))) {
            х = х * (-1);

        } else if (!playfield.isSown(new CellTopLeft(position.leftPossition + x, position.topPossition - y))) {
            y = y * (-1);

        } else if (!playfield.isSown(new CellTopLeft(position.leftPossition - x, position.topPossition - y))) {
            х = х * (-1);
            х = х * (-1);
        }

        position.leftPossition = position.leftPossition + x;
        position.leftPossition = position.topPossition + y;
    }
});