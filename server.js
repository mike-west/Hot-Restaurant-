var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "Allie",
        email: "allie@allie.com",
        party: 5,
        uniqueId: 726
    },
    {
        name: "Michelle",
        email: "michelle@michelle.com",
        party: 3,
        uniqueId: 555
    }
]


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.post("/api/reservations", function(req, res){
    var newReservation = req.body;
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});