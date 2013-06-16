module("EnemyModule.init");

test("When enemy is initialized, should set the correct value on position", function () {

    var position = new CellTopLeft(14, 100);

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);

    equal(position, enemy.position, "Position is set");

});

module("EnemyModule.moveTop");

test("When enemy is moving up, should set the correct value on position", function () {

    var position = new CellTopLeft(14, 100);
    
    var playfield = PlayfieldModule.Playfield(700, 300);
    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);

   
    enemy.moveTop(playfield);

    equal(position.topPosition, 90, "Position is set");

});

module("EnemyModule.moveBottom");

test("When enemy is moving down, should set the correct value on position", function () {

    var position = new CellTopLeft(14, 100);

    var playfield = PlayfieldModule.Playfield(700, 300);
    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);


    enemy.moveBottom(playfield);

    equal(position.topPosition, 110, "Position is set");

});

module("EnemyModule.moveRight");

test("When enemy is moving right, should set the correct value on position", function () {

    var position = new CellTopLeft(14, 100);

    var playfield = PlayfieldModule.Playfield(700, 300);
    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);


    enemy.moveRight(playfield);

    equal(position.leftPosition, 28, "Position is set");

});

module("EnemyModule.moveLeft");

test("When enemy is moving right, should set the correct value on position", function () {

    var position = new CellTopLeft(14, 100);

    var playfield = PlayfieldModule.Playfield(700, 300);
    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);


    enemy.moveLeft(playfield);

    equal(position.leftPosition, 14, "Position is set");

});