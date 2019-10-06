const PoolClass = require("pg").Pool;

const pool = new PoolClass({
  user: "postgres",
  host: "localhost",
  database: "weatherTiler_development",
  port: 5432,
  password: ""
});

pool.query("SELECT * FROM city_weathers", (error, dbResponse) => {
  console.log(dbResponse);
});
