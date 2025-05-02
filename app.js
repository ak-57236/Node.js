const express = require("express");
const app = express();

// Connect to the database
require("./Database/Connection");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server running on port 4000 🚀");
});
