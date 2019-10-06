var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "bob",
  password: "secret",
  database: "my_db"
});

// pool.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });

module.exports = {
  query: (queryText, params, callback) =>
    pool.query(queryText, params, callback)
};
