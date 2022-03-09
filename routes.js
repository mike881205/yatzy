const express = require("express");
const router = express.Router();
const db = require("./app/models");

router.post("", (req, res) => {
    db.User.create({ username: req.body.username })
        .then(userInfo => res.json(userInfo))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

module.exports = router;
