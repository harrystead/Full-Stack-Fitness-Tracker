var express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

// const htmlRouter = require("./routes/html-routes.js");
// const authorRouter = require("./routes/author-api-routes.js");
const apiRouter = require("./routes/post-api-routes.js");

var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// htmlRouter(app);
// authorRouter(app);
apiRouter(app);

var mongoDB =
  "mongodb+srv://harry123:harryjack1214@cluster0.7trlh.mongodb.net/Blog?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("🌎  ==> Connected to Database"));

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
