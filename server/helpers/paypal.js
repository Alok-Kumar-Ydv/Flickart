const paypal = require("paypal-rest-sdk");
// Paypal configuration need to configure
paypal.configure({
  mode: "",
  client_id: "",
  client_secret: "",
});

module.exports = paypal;
