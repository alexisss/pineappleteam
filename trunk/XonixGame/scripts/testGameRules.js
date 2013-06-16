module("GameRules.init");

test("When gameRules is initialized, should set the correct value on player", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);

    equal(gameRules.player, player, "Player is set");

});

test("When gameRules is initialized, should set the correct value on enemies", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);

    equal(gameRules.enemies, enemies, "Enemy is set");

});

test("When gameRules is initialized, should set the correct value on playfield", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);

    equal(gameRules.playfield, playfield, "Playfield is set");

});

module("GameRules.checkForCollision");

test("When gameRules is initialized, should set the correct value on check for collision", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);
    var result = gameRules.checkForCollisions();
    equal(result, true, "There is a Collision");

});

module("GameRules.hasWoN");

test("When gameRules is initialized, should set the correct value on has woN", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);
    playfield.filledCellsCounter = 1800;
    playfield.calculatePoints();

    var gameRules = new GameRules(player, enemies, playfield);
    var result = gameRules.hasWon();
    equal(result, true, "The player won the game");

});

module("GameRules.decreaseLives");

test("When gameRules is initialized, should set the correct value on check fordecreasing lives", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);
    player.lives = 5;

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);
    var result = gameRules.decreaseLives();
    equal(player.lives, 4, "There is a Collision");

});

module("GameRules.hasLost");

test("When gameRules is initialized, should set the correct value on has lost", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);
    player.lives = 0;

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);
    var result = gameRules.hasLost();
    equal(result, true, "There is a Collision");

});

test("When gameRules is initialized, should set the correct value on has lost but it is not", function () {

    var position = new CellTopLeft(14, 100);
    var player = new PlayerModule.GrandMa(position);
    player.lives = 2;

    var enemy = new EnemyModule.createEnemy(position, "red", 700, 300);
    var enemies = [];
    enemies.push(enemy);
    var playfield = PlayfieldModule.Playfield(700, 300);

    var gameRules = new GameRules(player, enemies, playfield);
    var result = gameRules.hasLost();
    equal(result, false, "There is a Collision");

});