const hbs = require("hbs");

selectIconWeather = chooseIcon => {
  var newIcon;
  switch (chooseIcon) {
    case "clear-night":
      newIcon = "./icon_weather/cloud-moon.svg";
      break;
    case "rain":
      newIcon = "./icon_weather/rain.svg";
      break;
    case "snow":
      newIcon = "./icon_weather/snow.svg";
      break;
    case "sleet":
      newIcon = "./icon_weather/snow-alt.svg";
      break;
    case "wind":
      newIcon = "./icon_weather/wind.svg";
      break;
    case "fog":
      newIcon = "./icon_weather/fog.svg";
    case "cloudy":
      newIcon = "./icon_weather/cloud.svg";
      break;
    case "partly-cloudy-day":
      newIcon = "./icon_weather/cloud-wind-sun.svg";
      break;
    case "partly-cloudy-night":
      newIcon = "./icon_weather/cloud-wind-moon.svg";
      break;
    case "clear-day":
      newIcon = "./icon_weather/sun.svg";
      break;
    default:
      newIcon = "./icon_weather/sun.svg";
  }
  return newIcon;
};

Handlebars.registerHelper("addURLIcon", function(icon) {
  return selectIconWeather(icon);
});
