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
  // Add Buttons from array to the page
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

  // Add new fruit to array and new button on the page
  $("#add-fruit").on("click", function(event) {
    event.preventDefault();
    newFruit = $("#fruit-input")
      .val()
      .trim();
    console.log(newFruit);
    fruits.push(newFruit);
    console.log(fruits);
    createButtons();
  });

  $(document).on("click", ".btn", function() {
    $("fruit-gifs").empty();

    var fruitButton = $(this).data("name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      fruitButton +
      "&api_key=kqiKKvJG2sEYdrlq3DGOTos6nyNHFnNG&limit=10";
    console.log(fruitButton);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
    });
  });
  createButtons();
});
