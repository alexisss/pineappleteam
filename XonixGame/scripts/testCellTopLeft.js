module("CellTopLeft.init");

test("When cellTopLeft is initialized, should set the correct values", function () {
    var cell = new CellTopLeft(14, 0);

    equal(cell.topPosition, 0, "Cell top position is set");
    equal(cell.leftPosition, 14, "Cell left position is set");
});