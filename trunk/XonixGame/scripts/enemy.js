var enemy = Class.create({
    init: function (position, color) {
        this.x = 1;
        this.y = 1;
        this.position = position;
        this.color = color;        
    },
    move: function() {
        
        if (!playfield.isSown(new CellTopLeft(position.leftPossition + x, position.topPossition + y))) {
            this.position.leftPossition += x;
            this.position.topPossition += y;

        } else if (!playfield.isSown(new CellTopLeft(position.leftPossition - x, position.topPossition + y))) {
            this.position.leftPossition -= x;
            this.position.topPossition += y;

        } else if (!playfield.isSown(new CellTopLeft(position.leftPossition + x, position.topPossition - y))) {
            this.position.leftPossition += x;
            this.position.topPossition -= y;

        } else if (!playfield.isSown(new CellTopLeft(position.leftPossition - x, position.topPossition - y))) {
            this.position.leftPossition -= x;
            this.position.topPossition -= y;
        }

        //TODO changing vectors
    }
});