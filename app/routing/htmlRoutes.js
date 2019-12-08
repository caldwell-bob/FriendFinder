var express = require("express");
var path = require("path");

myRoutes = function(app) {
  //   send all non setup requests to home page
  app.get(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //   define specific routes
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

module.exports = myRoutes;



