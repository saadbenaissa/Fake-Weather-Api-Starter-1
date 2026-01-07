const express = require('express'); // import express
const app = express(); // initialize express
const cors = require('cors'); // import cors

// import our fake weather data
const fakeWeatherData = require('./data');

// Enable all CORS requests
app.use(cors());

// GET route
app.get("/", (req, res) => {
  res.send("Fake Weather API draait ✔️ Probeer /weather");
});
app.get('/weather', function(req, res) {
  
  // store the query string parameter in cityName variable
  let cityName = req.query.city.toLowerCase();

  // loop through our fake data array
  for (let i = 0; i < fakeWeatherData.length; i++) {
    // if no city parameter exists
    if (!cityName) {
      return res.send({"status": "error", "message": "Please enter a city name"})
    } else if (cityName == fakeWeatherData[i].city.toLowerCase()) {
      return res.send(fakeWeatherData[i])
    }
  }

  // if city parameter isn't in our fake data set
  res.send({"status": "error", "message": "This city isn't in our database"})
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
})
