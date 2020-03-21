const request = require("request");

const tokens =
  "pk.eyJ1IjoibWFnMDAyIiwiYSI6ImNrNjBkN2xlcDA2dXgzZXFudDNoeXNyZm8ifQ.hn6xFl6_BqEmfU8RYV3xug";

function geocoding(keyword, callback) {
  console.log("searching....");
  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    keyword
  )}.json?access_token=${tokens}&language=vi&limit=5`;
  let data = null;
  request(geocodingUrl, { json: true }, (err, res) => {
    if (err) {
      return callback("Can't connect to server, try later", undefined);
    } else if (res.body.features.length === 0) {
      return callback({ err: "No result for your keyword" }, undefined);
    } else {
      return callback(undefined, res.body);
    }
  });
}

module.exports = geocoding;
