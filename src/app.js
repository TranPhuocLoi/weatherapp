const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const publicDirectory = path.join(__dirname, "../public");
const partialsDirectory = path.join(__dirname, "../views/partials");
const geocoding = require("./utils/geocoding");
const forecast = require("./utils/forecast");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../public")));

//set up view engine for express
hbs.registerPartials(partialsDirectory);
app.set("views", path.join(__dirname, "../views")); // set up directory for view folder
//set up view engine for express
app.set("view engine", "hbs");
//set up middleware for body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  // res.sendFile(publicDirectory + "/index.html");
  res.render("index", {
    title: "Home Page",
    username: "Nudo",
    name: "Loi Tran"
  });
});
app.get("/home", (req, res) => {
  // res.sendFile(publicDirectory + "/index.html");
  res.render("index", {
    title: "Home Page",
    username: "Nudo",
    name: "nudo350"
  });
});
app.get("/projects", (req, res) => {
  // res.sendFile(publicDirectory + "/help.html");
  res.render("projects", {
    title: "Help Page",
    helpText: "Can I help you????",
    name: "nudo350"
  });
});

app.get("/about", (req, res) => {
  // res.sendFile(publicDirectory + "/about.html");
  res.render("about", {
    title: "About Page",
    name: "nudo350"
  });
});

app.get("/contact", (req, res) => {
  // res.sendFile(publicDirectory + "/about.html");
  res.render("contact", {
    title: "About Page",
    name: "nudo350"
  });
});

app.get("/weather", (req, res) => {
  // res.sendFile(publicDirectory + "/about.html");
  res.render("weather", {
    title: "Weather Page",
    name: "nudo350"
  });
});

app.get("/result", (req, res) => {
  const { lat, lng, place_name } = req.query;
  forecast(lat, lng, function(err, dataForecast) {
    if (err) {
      return res.send(err);
    }
    const data = {
      ...dataForecast
    };
    console.log(data);

    res.render("result", {
      data,
      place_name
    });
  });
});

app.get("/api/weather", (req, res) => {
  console.log(req.query.search);
  if (!req.query.search) {
    // return res.end("Search query is undifined");
    res.render("weather", {
      title: "Weather Page",
      name: "nudo350"
    });
  }
  let data = undefined;
  geocoding(req.query.search, (err, data) => {
    if (err) {
      return res.send(err);
    }
    const place = data.features[0].place_name;
    const lat = data.features[0].geometry.coordinates[1];
    const lng = data.features[0].geometry.coordinates[1];
    forecast(lat, lng, function(err, dataForecast) {
      if (err) {
        return res.send(err);
      }
      const data = {
        ...dataForecast,
        place: place
      };
      const dataJSON = JSON.stringify(data);
      res.send(dataJSON);
    });
  });
});

app.post("/autocomplete", urlencodedParser, (req, res) => {
  const { search } = req.body;
  geocoding(search, function(err, data) {
    if (err) {
      return res.send(err);
    }
    console.log(data.features);
    const newData = data.features.map(feature => {
      return {
        place_name: feature.place_name,
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0]
      };
    });
    console.log(newData);
    res.render("autocomplete", {
      dataAutocomplete: newData
    });
  });
});
app.get("*", (req, res) => {
  // res.sendFile(publicDirectory + "/weather.html");
  res.render("404-page", {
    title: "404 Error page not found",
    name: "nudo350"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});
