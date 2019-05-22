var friendsData = require("../data/friends");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  
  app.post("/api/friends", function(req, res) {
    
    console.log(friendsData);
    var newBestFriend = req.body;
    var bestFriend = 0;
    bestFriendArr = [];
    
    for (i = 0; i < newBestFriend.scores.length; i++) {
      newBestFriend.scores[i] = parseInt(newBestFriend.scores[i]);
    }
    // logs the current survey entry scores.
    console.log(newBestFriend);
    for (i = 0; i < friendsData.length; i++) {
      // logs each friend scores in our api.
      console.log(friendsData[i].scores);
      var totalDifference = 0;
      for (z = 0; z < friendsData[i].scores.length; z++) {
        console.log(friendsData[i].scores[z])
        var absoluteDifference = Math.abs(newBestFriend.scores[z] - friendsData[i].scores[z]);
        // increments the total abs
        totalDifference += absoluteDifference;
      }
      console.log("----------------");
      console.log("total diff: " + totalDifference);
      // adds each calculated difference number to bestFriendArr
      bestFriendArr.push(totalDifference);
      console.log(bestFriendArr);
      // find the minimum in our array of absolute differences for each friend
      var match = Math.min.apply(null, bestFriendArr);
      console.log("match: " + match);
      // set bestFriend = index of the smallest difference in our bestFriendArr
      bestFriend = bestFriendArr.indexOf(Math.min.apply(Math, bestFriendArr));
      console.log("\n");
      console.log("best friend match:");
      console.log(friendsData[bestFriend]);
      console.log("\n");
    }
    // adds our new survey data to our friends.js data
    friendsData.push(newBestFriend);
    res.json(friendsData[bestFriend]);
  });
  
}
