module("PlayfieldModule.init");

test("Test if the cell is positioned correctly", function () {
    var position = new CellTopLeft(100, 20);
    var color = "red";

    var cell = new PlayfieldModule.Cell(position, color);

    equal(cell.position, position, "Cell positioning is correct");
});

test("Test if the playfiel is create with the correct dimentions", function () {
    var playfield = new PlayfieldModule.Playfield(700, 400);

    ok(playfield.canvasWidth == 700 && playfield.canvasHeight == 400, "Canvas dimentions are correct");
});