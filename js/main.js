//what can the user do?
// what does the user expect?
// What can the user see?

//Pull api for weather in any city in the U.S to dom/console
//Facilities have to include location addresses
//Append list to dom/console
$('#enter').on('click', function() {
var apiKey = "0ee3c123f38081d8ff0fae3f0c51f8ac";
var city = $("#city").val();
var country = $("#country").val();
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID="+apiKey+"&units=imperial";

$('form').on("submit",function(e){
  e.preventDefault();

  $.ajax({

    url: apiUrl,
    success: function(response){
    $('h1').html("The current weather in " +city+ ', ' + country + " is " +response.main.temp);
    console.log(response)// server response
  },

    error: function(response){
      console.log(response)
    }
  })
})
})
