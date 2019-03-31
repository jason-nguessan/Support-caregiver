//MODEL VARIABLE NAME MUST BE UNIQUE
analyzeModel = require("../model/analyze");

module.exports.displayInfo = (req, res, next) => {
  //FIND BASED ON THE OBJECT ID FROM OTHER TABLE
  analyzeModel.find((err, analyze) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        success: true,
        info: analyze
      });
    }
  });
};

module.exports.displayedit = (req, res, next) => {
  let id = req.params.id;

  analyzeModel.findById(id, (err, analyze) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        info: analyze
      });
    }
  });
};

/* TO DO
module.exports.processedit = (req, res, next) => {
  let id = req.params.id;
  let object = new analyzeModel({
    _id: id,
    recommendedPhrases: req.body.recommendedPhrases,
    behaviour: req.body.behaviour,
    score: req.body.score
  });
  analyzeModel.update({ _id: id }, object, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        info: analyze
      });
    }
  });
};
*/
