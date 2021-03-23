const router = require("express").Router();
const drinkRoute = require("./tea");

router.use("/api", drinkRoute);

module.exports = router;