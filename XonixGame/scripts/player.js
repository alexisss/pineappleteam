var PlayerModule = (function () { 
var Player = Class.create({
    init: function (position) {
        this.position = position;
<<<<<<< .mine=======        this.color = "purple";
>>>>>>> .theirs        this.radius = 10;
        
    },

    moveUp: function (distance) {
        if (this.position.topPosition > 0) {
            this.position.topPosition -= distance;
        }
    },

    moveDown: function (distance, maxHeight) {
        if (this.position.topPosition < maxHeight) { //this must be constant and not 100 but canvas height
            this.position.topPosition += distance;
        }
    },

    moveLeft: function (distance) {
        if (this.position.leftPosition > 0) {
            this.position.leftPosition -= distance;
        }
    },

    moveRight: function (distance, maxWidth) {
        if (this.position.leftPosition < maxWidth) { //must be something like canvas width
            this.position.leftPosition += distance;
        }
    }
});

var GrandMa = Class.create({
    init: function (position) {
        this._super.init.call(this, position);
        this.color = "purple";
    }
});

GrandMa.inherit(Player);

var GrandPa = Class.create({
    init: function (position) {
        this._super.init.call(this, position);
        this.color = "yellow";
    }
});

GrandPa.inherit(Player);
return {
    GrandMa : function (posistion) {
        return new GrandMa(posistion)
    },
    GrandPa: function (position) {
        return new GrandPa(position)
    },
}
}());