/** Database setup for BizTime. */
const { Client } = require("pg");
let DB_URI;

if (process.env.NODE_ENV === "test") DB_URI = "postgresql:///biztime_test";
else DB_URI = "postgresql:///biztime";

// console.log("URI VARIABLE", DB_URI);

let db = new Client({
connectionString: DB_URI
});

db.connect();

module.exports = db;

