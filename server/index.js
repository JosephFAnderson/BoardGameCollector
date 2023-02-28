const express = require('express');
require('dotenv').config();
const Models = require('./models');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded( { extended:true } ));
app.use(routes);

// Here to test server is running. 
// Delete in future
app.get('/', (req, res) => {
    res.send("Hello World");
})

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Listening at: http://localhost:${port}`);
    })
})

