module("PlayerModule.init");

test("When player is initialized, should set the correct value on position", function () {
    
    var position = {
        x: 150,
        y: 150
    };

    var type = "grandMa";
    var player = new PlayerModule.GrandMa(position, type);

    equal(position, player.position, "Position is set");
    
});

test("When player is initialized, should set the correct value on lives", function () {

    var position = {
        x: 150,
        y: 150
    };

    var player = new PlayerModule.GrandMa(position);

    equal(player.lives, 5, "Number of lives is proper");

});

module("PlayerModule.moveUp");

test("When player is movin up, should set the correct value on position", function () {

    var position = {
        x: 150,
        y: 150
    };

    var player = new PlayerModule.GrandMa(position);
    player.moveUp(10);

    equal(player.position, 140, "MoveUp is working correctly");

});
