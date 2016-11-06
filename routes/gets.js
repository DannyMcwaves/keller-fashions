
var express = require("express"),
        router = express.Router(),
        fs = require("fs");

router
    .get("/", function (req, res) {
        return res.render("index");
    })
    .get("/home", function(req, res) {
        return res.render("home");
    })
    .param("id", function (req, res, next, id) {
        req.id = id;
        return next();
    })
    .get("/samples/:id", function (req, res) {
        console.log(req.id);
        if (req.id == "sampleOne") {
            res.render("sampleOne");
        } else if (req.id == "sampleTwo") {
            res.render("sampleTwo");
        } else if (req.id == "wears") {
            res.render("wears");
        } else if (req.id == "sampleThree") {
            res.render("sampleThree");
        } else {
            res.redirect("/");
        }
    })
    .param("sample", function (req, res, next, sample) {
        req.sample = sample;
        return next();
    })
    .get("/json/:sample", function (req, res) {
        var stream = fs.createReadStream("./json/" + req.sample + ".json");
        stream.on('data', function (data) {
            res.send(data.toString());
        });
    })
    .get("/footer", function (req, res) {
        res.render("footer");
    })
    .get("/header", function (req, res) {
        res.render("header");
    })

module.exports = router;
