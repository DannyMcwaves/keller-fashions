
var express = require("express"),
        router = express.Router();

router
    .delete("/", function (req, res) {
        res.send("Data has being deleted");
    })

module.exports = router;
