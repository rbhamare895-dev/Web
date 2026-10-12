const fs = require("fs");
const path = require("path");

const dir = "."; // current directory
const allowed = [".txt", ".json", ".js"];
const files = fs.readdirSync(dir).filter(name => allowed.includes(path.extname(name)));
console.log("Matching files:", files);
