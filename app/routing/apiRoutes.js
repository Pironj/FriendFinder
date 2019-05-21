var friendsData = require("../data/friends");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  
  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);


    var parseData = req.body;

    for (i = 0; i < parseData.scores.length; i++) {
      parseData.scores[i] = parseInt(parseData.scores[i]);
    }
    console.log(parseData);
  });

}

for (i = 0; i < friendsData.length; i++) {
  var totalDifference = 0;
  for (z = 0; z < friendsData[i].scores.length; z++) {
    var absoluteDiff = Math.abs()
  }
}
