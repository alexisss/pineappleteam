var Enemy = Class.create({
    init: function (position, color) {
        this.position = position;
        this.color = color;
        this.radius = 10;
        this.x = 14;
        this.y = 10;
    },

    moveTop: function (playfield) {
        var newLeft = this.position.leftPosition;
        var newTop = this.position.topPosition + this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(rowIndex, colIndex) &&
            this.position.topPosition > 0)
        {
            this.position.topPosition -= this.y / 2;
        }
    },

    moveBottom: function (playfield) {
        var newLeft = this.position.leftPosition;
        var newTop = this.position.topPosition - this.y;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (!playfield.isSown(rowIndex, colIndex) &&            
            this.position.topPosition < parseInt(playfield.canvas.height) - 10) {

            this.position.topPosition += this.y / 2;
            
        }
    },

    moveLeft: function (playfield) {
        var newLeft = this.position.leftPosition - this.x;
        var newTop = this.position.topPosition;
        var colIndex = parseInt((newLeft) / 14);
        var rowIndex = parseInt((newTop) / 10);
        if (this.position.leftPosition > 0 &&
            !playfield.isSown(rowIndex, colIndex)) {

            this.position.leftPosition -= this.x / 2;
        }        
    },

    moveRight: function (playfield) {
        var newLeft = this.position.leftPosition + this.x;
        var newTop = this.position.topPosition;
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
               this.moveTop(playfield);
               break;
           case 1:
               this.moveBottom(playfield);
               break;
           case 2:
               this.moveRight(playfield);
               break;
           case 3:
               this.moveLeft(playfield);
               break;
           default:
               break;
       }
       console.log(this.position.leftPosition + ", " + this.position.topPosition);
    }
});

function getRandomInt() {
    return Math.floor(Math.random() * 4);
}
