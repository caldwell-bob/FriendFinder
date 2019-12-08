// var express = require("express");
// var path = require("path");
var friends = require("../data/friends.js");

myRoutes = function(app) {
  //   api route to see all friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //  api POST route to add friend
  app.post("/api/friends", function(req, res) {

    var theMatchedOne = {
        name: "",
        photo: "",
        friendDelta: 100
    };

    console.log(req.body);

    var usersData = req.body;
    var usersScores = usersData.scores;

    console.log(usersScores);

    var totalDelta = 0;

    // TODO loop through friends array
    // TODO loop through each friends scores array
    // TODO determine delta between friend and user score 
    // TODO - determine why the heck I'm struggling with this logic!!


    for (let index = 0; index < friends.length; index++) {
        const friend = friends[index];
        console.log(friend);
        totalDelta = 0;

        for (let i = 0; i < friend.scores[i]; i++) {
            totalDelta = userScores.scores[i] - friend.scores[i];

            // TODO compare userData to the current theMatchedOne and update if lower/equal
            if (totalDelta <= theMatchedOne.friendDelta) {
                theMatchedOne.name = friend.name;
                theMatchedOne.photo = friend.photo;
                theMatchedOne.friendDelta = totalDelta;
            }

            
        }
        
    }
    // add new user info to friends array
    friends.push(usersData);
    // return theMatchedOne 
    res.json(theMatchedOne);
  });

};

module.exports = myRoutes;

