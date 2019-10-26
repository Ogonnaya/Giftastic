$(document).ready(function() {
  // Fruit Variables
  var fruits = [
    "Apples",
    "Bananas",
    "Blueberries",
    "Cherries",
    "Mangos",
    "Oranges",
    "Strawberries"
  ];

  console.log(fruits);
  // Add Buttons to the page
  function createButtons() {
    // Delete GIFs before adding new ones
    $("#fruit-buttons").empty();

    // Loop for fruit array
    for (var i = 0; i < fruits.length; i++) {
      var a = $("<button>");
      a.addClass("btn btn-warning");
      a.attr("data-name", fruits[i]);
      a.text(fruits[i]);
      $("#fruit-buttons").append(a);
    }
  }

  $("#add-fruit").on("click", function(event) {
    event.preventDefault();
    userInput = $("#fruit-input")
      .val()
      .trim();
    console.log(userInput);
    fruits.push(userInput);
    console.log(fruits);
    createButtons();
  });
  createButtons();
});
