/** BizTime express application. */
const express = require("express");
const app = express();
const ExpressError = require("./expressError.js");
const invoiceRoutes = require("./routes/invoices.js");
const companyRoutes = require("./routes/companies.js");

app.use(express.json());
app.use('/invoices', invoiceRoutes);
app.use('/companies', companyRoutes);


/** 404 handler */
// 404 page not fond error handling
app.use((req, res, next)=> {
  const e = new ExpressError('Page Not Found', 404)
  next(e);
});



// Error Handler
app.use((error, req, res, next)=> {
  const errorMessage = error.message;
  const errorStatus = error.status;
  let status = errorStatus || 500;
  let message = errorMessage;
  return res.status(status).json({
      error: {message, status}
  });
});


module.exports = app;
