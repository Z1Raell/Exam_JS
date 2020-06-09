"use strict";

$(document).ready(function () {

   function getCoordinate() { navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude; 
    let lon = position.coords.longitude;
    }
    
}

  $.get(
    "https://api.openweathermap.org/data/2.5/onecall?appid={",
    {
      "lat": lat,
      "lon": lon,
      "appid": "213749a0405d2fe82b0cb62795b5b5ee"
    },
    function (date) {
      console.log(date);
    }
  )
});
