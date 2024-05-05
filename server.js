require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

var app = express();

MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
    app.locals.db = client.db('myAppDb');
    console.log("Connected to MongoDB");

    // Require routes here after DB connection is established
    const routes = require('./routes');
    app.use('/', routes);

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
   