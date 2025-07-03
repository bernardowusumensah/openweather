
window.onload = getWeatherData;

function getWeatherData() {

    var output = document.getElementById("output");
    var out_location = document.getElementById("location");
    var out_icon = document.getElementById("icon");
    var out_error = document.getElementById("error");
    var out_temp = document.getElementById("temperature");
    var out_condition = document.getElementById("conditions");
    var out_humidity = document.getElementById("humidity");


    
    var url = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=37bbf33578315d604d43726b86ee17da&units=metric";
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.send(null);

    // Wait for the response to complete
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Log the full data object to the console
            var DATA = xhr.response;
            console.log(DATA);

            // Update the HTML elements with the data
            out_location.innerHTML = DATA.name;

            out_temp.innerHTML = Math.round(DATA.main.temp) + "°C";
            out_condition.innerHTML = DATA.weather[0].description;
            out_humidity.innerHTML = DATA.main.humidity + "%";
            out_icon.src = "https://openweathermap.org/img/wn/" + DATA.weather[0].icon + "@2x.png";




        }

        else if (xhr.readyState == 4) {
            // Handle errors here
            out_error.innerHTML = "Error: API call was not successful";
            console.log(xhr.status);
        }
    };
}









