var EnemyModule = function(){
    var Enemy = Class.create({
        init: function (position, color, canvasWidth, canvasHeight) {
            this.position = position;
            this.color = color;
            this.radius = 10;
            this.x = 14;
            this.y = 10;
            this.countMove = 0;
            this.direction = 0;
            this.count = 0;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
        },

        moveTop: function (playfield) {
            var newLeft = this.position.leftPosition;
            var newTop = this.position.topPosition - this.y;
            var colIndex = parseInt((newLeft) / this.x);
            var rowIndex = parseInt((newTop) / this.y);
            if (!playfield.isSown(rowIndex, colIndex) &&
                this.position.topPosition > 0)
            {
                this.position.topPosition -= this.y;
            }
            else {
                this.countMove = 0;
            }
        },

        moveBottom: function (playfield) {
            var newLeft = this.position.leftPosition;
            var newTop = this.position.topPosition + this.y;
            var colIndex = parseInt((newLeft) / this.x);
            var rowIndex = parseInt((newTop) / this.y);
            if (!playfield.isSown(rowIndex, colIndex) &&            
                this.position.topPosition < parseInt(canvasHeight) - this.y) {

                this.position.topPosition += this.y;
            
            }
            else {
                this.countMove = 0;
            }
        },

        moveLeft: function (playfield) {
            var newLeft = this.position.leftPosition - this.x;
            var newTop = this.position.topPosition;
            var colIndex = parseInt((newLeft) / this.x);
            var rowIndex = parseInt((newTop) / this.y);
            if (this.position.leftPosition > 0 &&
                !playfield.isSown(rowIndex, colIndex)) {

                this.position.leftPosition -= this.x;
            }
            else {
                this.countMove = 0;
            }
        },

        moveRight: function (playfield) {
            var newLeft = this.position.leftPosition + this.x;
            var newTop = this.position.topPosition;
            var colIndex = parseInt((newLeft) / this.x);
            var rowIndex = parseInt((newTop) / this.y);
            if (this.position.leftPosition < (parseInt(canvasWidth) - this.x) &&
                !playfield.isSown(rowIndex, colIndex)) {

                this.position.leftPosition += this.x;
            } else {
                this.countMove = 0;
            }
        },

        move: function (playfield) {
            this.count++;
            if (this.count % 2 == 0) {
                return;
            }
            if (this.countMove <= 0) {
                this.direction = getRandomInt();
                this.countMove = getRandomInt() * 5;
            }
            this.countMove--;
        
            switch (this.direction) {
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
        }
        
    });

    function getRandomInt() {
        return Math.floor(Math.random() * 4);
    }

    return {        
        createEnemy: function (position, color, canvasWidth, canvasHeight) {
            return new Enemy(position, color)
        }
    }
}();