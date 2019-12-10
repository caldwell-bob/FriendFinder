// var express = require("express");
// var path = require("path");
var friends = require("../data/friends");

var tableData = []; //test var

myRoutes = function(app) {
  //   api route to see all friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //  api POST route to add friend
  app.post("/api/friends", function(req, res) {
      tableData.push(req.body);
    //   console.log("in /api/friends " + tableData[0]);
    //   console.log(Object.getOwnPropertyNames(tableData[0]));
    //   console.log(tableData[0].scores);
    //   console.log(tableData[0].name);
    //   console.log(tableData[0].photo);
    //   res.json(tableData);
    var usersData = tableData[0];

    // ! BLOCKER - I can't seem to do anything with req!!!!
    // ? why is my req.body undefined
    

    //   console.log("req.body: " + typeof req.body);

    var theMatchedOne = {
        name: "",
        photo: "",
        friendDelta: 100
    };

    
    // console.log("in POST /api/friends endpoint\n" + req.body);
    // console.log("req is of type: " + (typeof (req)))
    // console.log(Object.getOwnPropertyNames(req));
    // console.log(req.res.data);
    // console.log("in POST /api/friends endpoint\n" + req);

    // var usersData = req.body;
    var usersScores = usersData.scores;
    // console.log("userScores: " + usersScores);
    // const arrSum = usersScores => usersScores.reduce((a,b) => a + b, 0)
    // console.log("Users Score: " + arrSum);

    // console.log(usersData);

    var totalDelta = 0;

    
    
    // TODO determine delta between friend and user score 
    // TODO - determine why the heck I'm struggling with this logic!!

     // TODO loop through friends array
    for (let index = 0; index < friends.length; index++) {
         const friend = friends[index];
         console.log(friend.name);
         console.log(friend.scores);
         totalDelta = 0;
         // TODO loop through each friends scores array
         for (let i = 0; i < friend.scores.length; i++) {
            totalDelta += usersScores[i] - friend.scores[i];
            // totalDelta = Math.abs(totalDelta);
            //  const arrSum = arr => arr.reduce((a,b) => a + b, 0)

            //  console.log("totalDelta: " + totalDelta);
            // console.log(i);
            //  console.log("usersScores[i]: " + usersScores[i]);
            //  console.log("friend.scores[i]: " + friend.scores[i]);
            //  console.log(friend.name + "has a total delta of " + totalDelta);

             // TODO compare userData to the current theMatchedOne and update if lower/equal
            //  if (totalDelta <= theMatchedOne.friendDelta) {
            //      console.log("New theMatchedOne: " + friend.name);
            //      theMatchedOne.name = friend.name;
            //      theMatchedOne.photo = friend.photo;
            //      theMatchedOne.friendDelta = totalDelta;
            //  }

            
         };
         totalDelta = Math.abs(totalDelta);
         console.log("totalDelta for user: " + friend.name + "was " + totalDelta);
         if (totalDelta <= theMatchedOne.friendDelta) {
            // console.log("New theMatchedOne: " + friend.name);
            theMatchedOne.name = friend.name;
            theMatchedOne.photo = friend.photo;
            theMatchedOne.friendDelta = totalDelta;
        }
         console.log(friend.name + " has a total delta of " + totalDelta);
        
    }
    // add new user info to friends array
    friends.push(usersData);
    console.log(theMatchedOne);
    // res.json(req.body);
    // return theMatchedOne 
    res.json(theMatchedOne);
  });

};

module.exports = myRoutes;

