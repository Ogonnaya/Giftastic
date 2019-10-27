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
    // $("fruit-gifs").empty();
    var newFruit = $("#fruit-input")
      .val()
      .trim();
    console.log(newFruit);
    fruits.push(newFruit);
    console.log(fruits);

    createButtons();
  });

  // When fruit button is clicked, pull gif with giphy api
  $(document).on("click", ".btn", function() {
    $("fruit-gifs").empty();

    var fruitButton = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      fruitButton +
      "&api_key=fhdo605DvgFDESYqln0r3bZdS9zqyZ4u&limit=10";
    console.log(fruitButton);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        var fruitDiv = $("<div>");
        fruitDiv.addClass("fruit-giphy");

        var p = $("<p>").text("Rating: " + response.data[i].rating);
        var fruitImage = $("<img>");

        fruitImage.attr("src", response.data[i].images.fixed_height_still.url);
        fruitImage.attr(
          "data-still",
          response.data[i].images.fixed_height_still.url
        );
        fruitImage.attr(
          "data-animate",
          response.data[i].images.fixed_height.url
        );
        fruitImage.attr("data-state", "still");
        fruitImage.addClass("gif");
        fruitDiv.append(p);
        fruitDiv.append(fruitImage);

        $("#fruit-gifs").prepend(fruitDiv);
      }
    });
  });

  // Start and stop gifs from playing
  $(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  createButtons();
});
