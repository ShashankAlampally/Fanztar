const express = require('express');
const app = express();
const cors = require('cors');
const {x} = require("./Constants/data.js");
const routes = require('./Routes/routes.js')

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/',routes);

const port = 8000;
app.listen(port, () => {
    console.log("Server running on port number " + port);
});