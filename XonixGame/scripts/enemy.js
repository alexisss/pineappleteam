var Enemy = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.radius = 10;
        this.x = 14;
        this.y = 10;
    },

    moveTop: function (playfield) {
        var newLeft = this.position.leftPossition;
        var newTop = this.position.topPossition + this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(rowIndex, colIndex) &&
            this.position.topPossition > 0)
        {
            this.position.topPossition += this.y / 2;
        }
    },

    moveBottom: function (playfield) {
        var newLeft = this.position.leftPossition;
        var newTop = this.position.topPossition - this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(rowIndex, colIndex) &&            
            this.position.topPossition < parseInt(playfield.canvas.height) - 10) {

            this.position.topPossition -= this.y / 2;
        }
    },

    moveLeft: function (playfield) {
        var newLeft = this.position.leftPossition - this.x;
        var newTop = this.position.topPossition;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition > 0 &&
            !playfield.isSown(rowIndex, colIndex)) {

            this.position.leftPosition -= this.x / 2;
        }        
    },

    moveRight: function (playfield) {
        var newLeft = this.position.leftPossition + this.x;
        var newTop = this.position.topPossition;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition < parseInt(playfield.canvas.width) &&
            !playfield.isSown(rowIndex, colIndex)) {
            
            this.position.leftPosition += this.x / 2;
        }
    },

    move: function (playfield) {
       var direction = getRandomInt();
       switch (direction) {
           case 0:
               console.log("move t");
               this.moveTop(playfield);
               break;
           case 1:
               console.log("move b");
               this.moveBottom(playfield);
               break;
           case 2:
               console.log("move r");
               this.moveRight(playfield);
               break;
           case 3:
               console.log("move l");
               this.moveLeft(playfield);
               break;
           default:
               break;
       }        
    }
});

function getRandomInt() {
    return Math.floor(Math.random() * 4);
}
