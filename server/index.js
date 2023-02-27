const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded( { extended:true } ));

// Here to test server is running. 
// Delete in future
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
})