const PORT = process.env.PORT || 3001;
// const path = require("path");
const fs = require("fs");
// const routes = require('./routes');

const express = require("express");
const app = express();

const notesList = require("./db/db.json");

app.use(express.static("public"));
// app.use('routes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});