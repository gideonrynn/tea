const db = require("../models");
const router = require("express").Router();
const { Op } = require("sequelize");

router.get("/tea", (req, res) => {
    
    db.Tea.findAll()
      .then(teas => res.json(teas))

});

router.post("/tea/new", ({body}, res) => {

  console.log(body)
  db.Tea.create(body)
    .then((tea) => {
      db.Saga.create({
        newUpdate: "new tea added",
        TeaId: tea.dataValues.id 
      })
    })
      .then(tea => {
        res.json(tea);
      })
      .catch(err => {
        res.status(404).json(err);
      });
});

module.exports = router;