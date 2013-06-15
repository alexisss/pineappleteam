var EnemyModule = function () {
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

            this.maxTop = 6 * this.y;
            this.maxBottom = canvasHeight - 60;
            this.maxLeft = 2 * this.x;
            this.maxRight = canvasWidth - 42;
        },

        moveTop: function (playfield) {
            var newTop = this.position.topPosition - this.y;
            if (newTop > this.maxTop + 1) {
                var colIndex = parseInt((this.position.leftPosition) / this.x);
                var rowIndex = parseInt((newTop) / this.y);
                playfield.array[rowIndex][colIndex].isSown = false;
                this.position.topPosition = newTop;
            }
        },

        moveBottom: function (playfield) {
            var newTop = this.position.topPosition + this.y;
            if (newTop < this.maxBottom) {
                var colIndex = parseInt((this.position.leftPosition) / this.x);
                var rowIndex = parseInt((newTop) / this.y);
                playfield.array[rowIndex][colIndex].isSown = false;
                this.position.topPosition = newTop;
            }
        },

        moveLeft: function (playfield) {
            var newLeft = this.position.leftPosition - this.x;
            if (newLeft > this.maxLeft) {
                var rowIndex = parseInt((this.position.topPosition) / this.y);
                var colIndex = parseInt((newLeft) / this.x);
                playfield.array[rowIndex][colIndex].isSown = false;
                this.position.leftPosition = newLeft;
            }
        },

        moveRight: function (playfield) {
            var newLeft = this.position.leftPosition + this.x;
            if (newLeft < this.maxRight) {
                var rowIndex = parseInt((this.position.topPosition) / this.y);
                var colIndex = parseInt((newLeft) / this.x);
                playfield.array[rowIndex][colIndex].isSown = false;
                this.position.leftPosition = newLeft;
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
            return new Enemy(position, color, canvasWidth, canvasHeight)
        }
    }
}();