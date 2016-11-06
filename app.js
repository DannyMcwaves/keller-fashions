/*
this is the main start of the mean stack applications and I am going to use this
as the main blue print to create all my applications.

First of all, I need to import all the modules that I would need for this backend thingy to work
really really well and the I will create a middleware out of it and then use it as much as
possible.

after that I would put all the import middlewares inside the main express application
and then use it create all the works that are necessary for the automation of my own
workflow.
*/
// the third party modules required by the main app in this context.

var express = require('express'),
        logger = require('morgan'),
        cookie_parser = require("cookie-parser"),
        method_override = require("method-override"),
        compression = require('compression'),
        body_parser = require("body-parser"),
        favicon = require("serve-favicon"),
        errorhandler = require("errorhandler"),
        csurf = require("csurf"),
        session = require("express-session"),
        busboy = require("connect-busboy"),
        mongoskin = require("mongoskin"),
        mongoose = require("mongoose"),
        path = require("path"),
        serveIndex = require("serve-index"),
        routes = require("./routes/index"),

        // instantiating the express application.
        app = express();

// various setting for the express application.
app.set("appName", "mean seed");
app.set("x-powered-by", false);
app.set("env", "development");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("view cache", app.get("env") === "production");
app.set("json spaces", 4);
app.set("jsonp callback name", "cb");

// it is now time to set up the middlewares that are going to make
// development very easy.


app.use(compression({threshold: 1}));
app.use(logger("dev"));
app.use(body_parser.json({strict: false, limit: 5000}));
app.use(body_parser.urlencoded({limit: 10000, extended: true}));
app.use(method_override("_method"));
app.use(cookie_parser("what-am-i-willing-to-give-up"));
app.use(session({key: "_sessId", secret: "jkqhrqnuthvnwusviwivhguvovnewk", resave: true, saveUninitialized: true}));
app.use(csurf());
app.use("/files", serveIndex ("/", {'icons': true, "views": 'details'}) );


// use this middlewares to connect to the other parts of the code and all that.
app.use("/upload", busboy({immediate: true}));
app.use("/fonts", express.static("./fonts"));
app.use("/images",  express.static("./images"));
app.use("/js", express.static("./js"));
app.use("/css", express.static("./css"));
app.use("/filters", express.static("./filters"));
app.use("/controllers", express.static("./controllers"));
app.use("/directives", express.static("./directives"));
app.use("/services", express.static("./services"));
app.use("/modules", express.static("./modules"));
app.use("/json", express.static("./json"));
app.use("/files", express.static("/"));
app.locals = {
    title: "Keller Faxions"
};

app.get("/", routes.gets);
app.get("/home", routes.gets);
app.get("/samples/:id", routes.gets);
app.get("/json/:sample", routes.gets);
app.get("/footer", routes.gets);
app.get("/header", routes.gets);
app.get("/message", routes.gets);




app.put("/data", function (req, res) {
    console.log('data has being deleted');
    res.status(204).end();
});


app.use(errorhandler())
module.exports = app;
