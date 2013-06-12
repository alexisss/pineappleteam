var GameRules = Class.create({
    init: function () { },
    validatePosition: function (cell) {
        // TODO
    },
    hasCollisions: function() {
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].doesEnemyCollide(i)) {
            return true;
        }
    }

    return false;
    },

    doesEnemyCollide : function (index) {
    var enemy = enemies[index];

    for (var i = 0; i < pathSoFar.length; i++) {
        if (enemy.cell.equals(pathSoFar[i].cell)) {
            return true;
        }
    }

    return false;
    },
});