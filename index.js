const express = require('express');
const app = express();

require("dotenv").config();

const router = require('./src/routes/router');
const morgan = require('morgan');
const connect = require('./src/database/connect');

const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/to-do-list", router);

start();

async function start(){
    try {
        await connect(process.env.MONGO_URI)
        app.listen(port, console.log(`http://localhost:${port}/`));
    } catch (error) {
        console.log("Error");
    }
}