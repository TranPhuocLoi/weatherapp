const request = require("request");

function forecast(lat, lng, callback) {
  const url = `https://api.darksky.net/forecast/dbeebaeb5ab6f2b83fefb03bc28f462f/${lat},${lng}?units=si&lang=vi`;

  request(url, { json: true }, (err, response) => {
    const data = response.body;
    if (err) {
      return callback("Connection fail", undefined);
    }
    if (data.error) {
      return callback(data.error, undefined);
    }
    return callback(undefined, {
      summary: data.currently.summary,
      icon: data.currently.icon,
      temperature: data.currently.temperature,
      currently_data: data.currently,
      hourly_data: data.hourly.data
    });
  });
}

module.exports = forecast;
