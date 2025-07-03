window.onload = function () {
    // Add event listeners for both buttons
    document.getElementById("Toronto").addEventListener("click", function () {
        getWeatherData("Toronto");
    });

    document.getElementById("Vancouver").addEventListener("click", function () {
        getWeatherData("Vancouver");
    });
};

// Named function to handle all cities
function getWeatherData(city) {
    var output = document.getElementById("output");
    var out_location = document.getElementById("location");
    var out_icon = document.getElementById("icon");
    var out_error = document.getElementById("error");
    var out_temp = document.getElementById("temperature");
    var out_condition = document.getElementById("conditions");
    var out_humidity = document.getElementById("humidity");
    var out_wind = document.getElementById("wind");

   

    // Construct API URL dynamically
    var apiKey = "37bbf33578315d604d43726b86ee17da";
    var url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey +
        "&units=metric";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var DATA = xhr.response;
            console.log(DATA);

            // Reveal the output section
            output.style.display = "block";

            // Fill in the weather data
            out_location.innerHTML = DATA.name;
            out_temp.innerHTML = Math.round(DATA.main.temp) + "°C &#x1F321;";
            out_condition.innerHTML = DATA.weather[0].description;
            out_humidity.innerHTML = DATA.main.humidity + "%";
            out_wind.innerHTML = Math.round(DATA.wind.speed) + " m/s";

            // Weather icon
            var iconCode = DATA.weather[0].icon;
            var iconDesc = DATA.weather[0].description;
            out_icon.innerHTML =
                '<img src="https://openweathermap.org/img/wn/' +
                iconCode +
                '@2x.png" alt="' +
                iconDesc +
                '">';
        } else if (xhr.readyState === 4) {
            // Display error if call fails
            out_error.innerHTML = "Error: API call was not successful.";
            console.log("Status: " + xhr.status);
        }
    };
}
