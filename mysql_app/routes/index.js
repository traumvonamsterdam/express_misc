var express = require("express");
var router = express.Router();
const mysqlDb = require("../db/mysqlConn");

/* GET home page. */
router.get("/", function(req, res, next) {
  const queryText = "SELECT * FROM tasks WHERE id > ?";
  mysqlDb.query(queryText, [3], (error, results) => {
    console.log(results);
  });
});

module.exports = router;
