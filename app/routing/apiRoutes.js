var friendsData = require("../data/friends");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  
  app.post("/api/friends", function(req, res) {
    
    
    var parseData = req.body;
    var bestFriendArr = [];
    
    for (i = 0; i < parseData.scores.length; i++) {
      parseData.scores[i] = parseInt(parseData.scores[i]);
    }
    // logs the current survey entry scores.
    console.log(parseData.scores);
    for (i = 0; i < friendsData.length; i++) {
      // logs each friend in our api.
      console.log(friendsData[i].scores);
      var totalDifference = 0;
      for (z = 0; z < friendsData[i].scores.length; z++) {
        console.log(friendsData[i].scores[z])
        var absoluteDifference = Math.abs(parseData.scores[z] - friendsData[i].scores[z]);
        // increments the total abs
        totalDifference += absoluteDifference;
      }
      console.log("----------------");
      console.log(totalDifference)
      bestFriendArr.push(totalDifference);
      console.log(bestFriendArr);
      var match = Math.min.apply(null, bestFriendArr);
      console.log(match);
      // var friendMatch = friendsData[i]
    }
    // parseData.scores.forEach(element => {
    //   if (bestFriend < totalDifference) {
    //     console.log(bestFriend);
    //   }
      
    // });
    friendsData.push(req.body);
  });
  
}

