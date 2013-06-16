module("PlayerModule.init");

test("When player is initialized, should set the correct value on position", function () {
    
    var position = new CellTopLeft(14, 100);

    var type = "grandMa";
    var player = new PlayerModule.GrandMa(position, type);

    equal(position, player.position, "Position is set");
    
});

test("When player is initialized, should set the correct value on lives", function () {

    var position = new CellTopLeft(14, 100);

    var player = new PlayerModule.GrandMa(position);

    equal(player.lives, 5, "Number of lives is proper");

});

module("PlayerModule.moveUp");

test("When player is movin up, should set the correct value on position", function () {

    var playerPosition = new CellTopLeft(14, 100);

    var player = new PlayerModule.GrandMa(playerPosition);
    player.moveUp(10);

    equal(playerPosition.topPosition, 90, "MoveUp is working correctly");

});

module("PlayerModule.moveDown");

test("When player is movin down, should set the correct value on position", function () {

    var playerPosition = new CellTopLeft(32, 150);

    var player = new PlayerModule.GrandMa(playerPosition);
    player.moveDown(30, 700);

    equal(playerPosition.topPosition, 180, "MoveDown is working correctly");

});

module("PlayerModule.moveRight");

test("When player is movin right, should set the correct value on position", function () {

    var playerPosition = new CellTopLeft(32, 150);

    var player = new PlayerModule.GrandMa(playerPosition);
    player.moveRight(32, 700);

    equal(playerPosition.leftPosition, 64, "MoveRight is working correctly");

});

module("PlayerModule.moveLeft");

test("When player is movin left, should set the correct value on position", function () {

    var playerPosition = new CellTopLeft(32, 150);

    var player = new PlayerModule.GrandMa(playerPosition);
    player.moveLeft(32, 700);

    equal(playerPosition.leftPosition, 0, "MoveLeft is working correctly");

});

module("PlayerModule.Reset");

test("When player is reset, should set the correct value on position", function () {

    var playerPosition = new CellTopLeft(14, 100);

    var player = new PlayerModule.GrandMa(playerPosition);
    player.moveUp(10);

    equal(playerPosition.topPosition, 90, "MoveUp is working correctly");

    var playerPositionReset = new CellTopLeft(14, 100);
    player.reset(playerPositionReset);

    equal(playerPositionReset.topPosition, 100, "Reset is working correctly");
});