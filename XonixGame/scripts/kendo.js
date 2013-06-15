$("#color-chooser").kendoColorPalette({
    palette: ["basic"],
    tileSize: 30,
    value: "#99d9ea",
    change: function () {
        var colorId = this.value().substring(1);
        $('#playfield').css('background-color', '#' + colorId);
    }
});

$(document).ready(function () {
    $("#players").kendoComboBox({
        filter: "startswith",
        dataTextField: "ContactName",
        dataValueField: "CustomerID",
        template: '<img src="styles/img/${data.ContactName}.jpg" alt=\"${data.ContactName}\" height="150" />' +
                '<h3>${ data.ContactName }</h3>' +
                '<p>${ data.CompanyName }</p>',
        dataSource: [{ "ContactName": "GrandPa", "CompanyName": "Pineapple Team" }, { "ContactName": "GrandMa", "CompanyName": "Pineapple Team" }]
    });

    var combobox = $("#players").data("kendoComboBox");
    combobox.bind("change", function (e) {
        changePlayerType(e, this);
    });
    combobox.select(0);
});