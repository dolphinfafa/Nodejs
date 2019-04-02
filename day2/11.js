var ejs = require("ejs");
var fs = require("fs");

fs.readFile("./views/index.ejs", function(err, data){
    var template = data.toString();
    var dic = {a: 6};

    var html = ejs.render(template, dic);

    console.log(template);

    console.log(html);

    //console.log(html);
});

/*
var ejs = require("ejs");

var string = "<%= a %>";

var data = {
    a: 6,
};

var html = ejs.render(string, data);

console.log(html);
*/