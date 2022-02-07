const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

const like = require('./routes/like');

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', like); 
app.use('/api/favorite', require('./routes/favorite'));

// https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/public"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server Running at port ${port}`)
});