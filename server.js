let express = require("express");
let timestampRoutes = require("./routes/timestamp");

let app = express();

app.use(express.static("./public"));

app.use("/api/timestamp/", timestampRoutes);

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.use(function(req, res, next) {
  res.sendStatus(404);
});

app.listen(3000);
