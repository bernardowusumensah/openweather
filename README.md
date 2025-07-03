 Weather API Application 🌤️



## 📋 Overview

This project demonstrates the use of the **OpenWeatherMap Current Weather Data API** using pure JavaScript with `XMLHttpRequest()` to fetch and display current weather data for two cities: **Toronto** and **Vancouver**. The application adheres strictly to assignment constraints—**no fetch API, jQuery, or generative AI tools** were used.

## 🚀 Features

- Two interactive buttons to choose a city (Toronto, Vancouver)
- Current weather data display, including:
  - 🌆 City name
  - 🌡️ Temperature (in °C with icon &#x1F321;)
  - 🌤️ Weather condition description
  - 🌁 Icon representing current weather (with dynamic `alt` text)
  - 💨 Wind speed (as fifth custom property)
- Responsive updates when switching between cities
- Graceful error handling with visible user message
- Single **named function** handles all city selections (stretch goal)

## 📦 Files Included

- `weather1.js`: Main JavaScript file with complete functionality (event listeners, API calls, DOM updates)
- `weather.js`: Initial version for Toronto only (not reused in final version)
- `index.html`: Not included here but assumed to contain required elements and button IDs (`Toronto`, `Vancouver`, etc.)
- `README.md`: This file

## 🛠 Technologies Used

- JavaScript (Vanilla)
- DOM manipulation
- `XMLHttpRequest()`
- OpenWeatherMap API

## 📄 API Used

- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Query Parameters:**
  - `q` – City name
  - `appid` – API Key
  - `units=metric` – For temperature in Celsius

## ✅ How It Works

1. On page load, event listeners are added to the city buttons.
2. When a button is clicked, a named function (`getWeatherData(city)`) is triggered.
3. API is called with `XMLHttpRequest`.
4. On success:
   - The output section becomes visible.
   - City weather details are populated dynamically.
5. On failure:
   - An error message is displayed to the user.

## 🧪 Stretch Goals Achieved

- ✅ Single named function handles multiple cities
- ✅ Dynamic `alt` text for weather icon from JSON data

## 📌 Notes

- The OpenWeatherMap API key is hardcoded: `37bbf33578315d604d43726b86ee17da`
- Ensure HTML contains output container IDs:
  - `output`, `location`, `temperature`, `conditions`, `humidity`, `wind`, `icon`, `error`

## 🧠 Learning Objectives

- Practice working with API data via `XMLHttpRequest`
- Reinforce DOM manipulation and event handling
- Interpret and apply API documentation
- Develop clean, readable, and maintainable code
- Handle asynchronous data flow and user interaction

## 💬 Self-Reflection

> _"This project helped reinforce my understanding of working with third-party APIs and handling asynchronous JavaScript without modern conveniences like fetch or async/await. I also improved my ability to debug API calls and dynamically update the DOM."_ – [Your Name]
