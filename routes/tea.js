const db = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

router.get('/tea', (req, res) => {
    
    db.Tea.findAll()
      .then(teas => res.json(teas))

});

module.exports = router;