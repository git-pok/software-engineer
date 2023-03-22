/** Server startup for BizTime. */
const app = require("./app.js");


app.listen(3000, ()=> {
  console.log("Welcome! App created, visit, localhost:3000.");
});