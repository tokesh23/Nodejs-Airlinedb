const express = require("express");
const { PORT } = require("./config/configserver");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");

const FliteBack = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);

    app.listen(PORT,async () => {
        console.log(`Localhost:PORT ${PORT}`);
    });
};

FliteBack();


