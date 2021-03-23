const express = require("express");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;

require('dotenv').config({path:'.env'})

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const db = require("./models");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({force:false})
    .then(() => {
        app.listen(PORT, () => 
            console.log(`API server now on ${PORT}!`))
            
});