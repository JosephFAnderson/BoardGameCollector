const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT

// Here to test server is running. 
// Delete in future
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})