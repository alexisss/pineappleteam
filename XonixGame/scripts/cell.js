/// <reference path="CellTopLeft.js" />
/// <reference path="ClassicalOOPExtensions.js" />
var Cell = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.width = 14;
        this.height = 10;
        this.isSown = false;
    },
});