var PlayerModule = (function () { 
var Player = Class.create({
    init: function (position, type) {
        this.position = position;
        //this.radius = 10;
        this.playerType = type;
        this.lives = 5;
    },

    moveUp: function (distance) {
        if (this.position.topPosition > 60) {
            this.position.topPosition -= distance;
        }
    },

    moveDown: function (distance, maxHeight) {
        if (this.position.topPosition < maxHeight - 10) {
            this.position.topPosition += distance;
        }
    },

    moveLeft: function (distance) {
        if (this.position.leftPosition > 14) {
            this.position.leftPosition -= distance;
        }
    },

    moveRight: function (distance, maxWidth) {
        if (this.position.leftPosition < maxWidth - 42) {
            this.position.leftPosition += distance;
        }
    },

    reset: function (position) {
        this.position = position;
        this.lives = 5;
    }
});

var GrandMa = Class.create({
    init: function (position) {
        this._super.init.call(this, position, "grandMa");
        this.color = "purple";
    }
});

GrandMa.inherit(Player);

var GrandPa = Class.create({
    init: function (position) {
        this._super.init.call(this, position, "grandPa");
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