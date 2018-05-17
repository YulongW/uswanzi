var request = require("request");

module.exports = function(app) {

  app.get('/api/uu/:tracking', function(req, res) {
    var tracking = req.params.tracking;

    if (/^([0-9]*)$/.test(tracking)) {
      const url = 'http://www.2uex.com/selectpackge?danhao=' + tracking;

      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.json(body);
        } else {
          res.json({});
        }
      });
    }
  });
  
}
