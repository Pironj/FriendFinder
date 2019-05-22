// requiring path package for redirect
var path = require("path");
module.exports = function(app) {
  // Routes
  // =============================================================
  
  app.get("/survey", function(req, res, err) {
    if (err) {
      console.log(err);
    }
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  app.get("/", function(req, res, err) {
    if (err) {
      console.log(err);
    }
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
