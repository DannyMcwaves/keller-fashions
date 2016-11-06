
var express = require("express"),
        router = express.Router();

router
    .put("/", function (req, res) {
        res.send("Data has being updated");
    })

module.exports = router;
