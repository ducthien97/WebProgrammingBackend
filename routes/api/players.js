const express = require("express");
const router = express.Router();
const Players = require('../../models/Players');

router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Players.find()
      .then((workers) => res.json(workers));
});

router.post("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const NewPlayer = new Players(req.body);
    //console.log(Newworker.courses[0])
    NewPlayer.save().then((player) => res.json(player));
});

router.delete("/:id", (req, res) => {
    Players.findById(req.params.id)
      .then((player) => player.remove().then(() => res.json({ success: true })))
      .catch((err) => res.status(404).json({ success: false }));
});
module.exports = router;