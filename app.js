const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Redirect default route to contacts
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});
