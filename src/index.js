const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//const routes = require("./routes");
dotenv.config();
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
mongoose.connect(`mongodb+srv://admin:${process.env.DATABASEURL}@cluster0-oxzqu.mongodb.net/teachme?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((err) => {
    console.log('Unable to connect');
    console.log(err);
  });
//app.use(routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
module.exports = app;