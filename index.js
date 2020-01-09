//  *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// Dependencies

const express = require("express");

//set up the Express app

const app = express();

const PORT = process.env.PORT || 8080;

// Middleware 
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

app.use(express.static("./public"));

//Requiring our models for syncing
const db = require("./models");
// Routes
require("./routes/api-routes.js")(app);


var  syncOptions = { force: false };

// calling sequelize.sync() which will automatically sync all models.
// Syncing our sequelize models and then starting the server (our Express app)
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
   console.log(`express server listening on: http://localhost:${PORT}`);
 });
});

module.exports = app;