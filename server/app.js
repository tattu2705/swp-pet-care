var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const moongose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/appointments', require('./routes/appointment.route'));
app.use('/doctors', require('./routes/doctor.route'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

moongose
  .connect("mongodb://localhost:27017/express-mongoose")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

module.exports = app;
