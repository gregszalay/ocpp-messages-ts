"use strict";
const compile = require("json-schema-to-typescript");
const { compileFromFile } = require("json-schema-to-typescript");
const fs = require("fs");
fs.readdir(__dirname + "/schemas/", function (err, files) {
    //handling error
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // compile from file
        compileFromFile(__dirname + "/schemas/" + file).then((ts) => fs.writeFileSync(__dirname + "/types/" + file.replace(".json", ".d.ts"), ts));
        console.log(file);
    });
});
