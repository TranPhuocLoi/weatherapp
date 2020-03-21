// const form = document.querySelector("form");
// const input = document.querySelector("#search");
// const para_1 = document.querySelector("#paragraph_1");
// const para_2 = document.querySelector("#paragraph_2");
// const loading = document.querySelector("#loading");

// loading.style.display = "none";

// selectIconWeather = chooseIcon => {
//   var newIcon;
//   switch (chooseIcon) {
//     case "clear-night":
//       newIcon = "./icon_weather/cloud-moon.svg";
//       break;
//     case "rain":
//       newIcon = "./icon_weather/rain.svg";
//       break;
//     case "snow":
//       newIcon = "./icon_weather/snow.svg";
//       break;
//     case "sleet":
//       newIcon = "./icon_weather/snow-alt.svg";
//       break;
//     case "wind":
//       newIcon = "./icon_weather/wind.svg";
//       break;
//     case "fog":
//       newIcon = "./icon_weather/fog.svg";
//     case "cloudy":
//       newIcon = "./icon_weather/cloud.svg";
//       break;
//     case "partly-cloudy-day":
//       newIcon = "./icon_weather/cloud-wind-sun.svg";
//       break;
//     case "partly-cloudy-night":
//       newIcon = "./icon_weather/cloud-wind-moon.svg";
//       break;
//     case "clear-day":
//       newIcon = "./icon_weather/sun.svg";
//       break;
//     default:
//       newIcon = "./icon_weather/sun.svg";
//   }
//   return newIcon;
// };

// createWeatherReasult = (place, temperature, icon) => {
//   console.log("ddddddd" + icon);
//   return [
//     '<div class="weather-card madrid">',
//     '<div class="weather-icon">',
//     '<img class="icon-style" src="',
//     selectIconWeather(icon),
//     '"></div > ',
//     "<h1>",
//     temperature +'º',
//     "</h1 >",
//     " <p>",
//     place,
//     "</p>",
//     "</div>"
//   ].join("\n");
// };

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const searchKeyword = input.value;
//   loading.style.display = "block";
//   fetch("/api/weather?search=" + searchKeyword)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       if (data.err) {
//         return (para_2.textContent = data.err);
//       }
//       loading.style.display = "none";
//       const { place, temperature, icon } = data;

//       var addResultElement = document.createElement("div");
//       var resultElement = document.createTextNode(
//         createWeatherReasult(place, temperature, icon)
//       );
//       addResultElement.appendChild(resultElement);
//       document.getElementById("resultElement").innerHTML =
//         addResultElement.textContent;
//     })
//     .catch(err => {
//       para_2.textContent = "ERROR!";
//     });
// });
