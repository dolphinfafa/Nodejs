var express = require("express");

var app = express();

var db = [
    {
        "title": "woshi 1 hao xinwen",
        "time": "2019874464633",
        "neirong": "<p>ldsfjdslkfjlsjflksdjfdjfdsljflksjflkdsjflk</p>"
    },

    {
        "title": "woshi 2 hao xinwen",
        "time": "2019874464633",
        "neirong": "<p>ldsfjdslkfjlsjflksdjfdjfdsljflksjflkdsjflk</p>"
    },

    {
        "title": "woshi 3 hao xinwen",
        "time": "2019874464633",
        "neirong": "<p>ldsfjdslkfjlsjflksdjfdjfdsljflksjflkdsjflk</p>"
    },
];

app.set("view engine", "ejs");

/*
app.get("/news/:id", function (req,res) {
    //新闻id
    var id = parseInt(req.params.id);

    res.render("haha", db[id]);
})；
*/

app.get("/news/:id", function (req,res) {
    var id = parseInt(req.params.id)-1;

    res.render("haha", db[id]);
});

app.listen(3000);