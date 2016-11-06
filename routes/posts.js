
var express = require("express"),
        router = express.Router();

router
    .post("/", function (req, res) {
        res.send("Data has being posted");
    })

module.exports = router;
