const fs = require("fs");

const file = "sample.txt";
fs.writeFileSync(file, "Check file information");
const s = fs.statSync(file);
console.log("Size:", s.size, "bytes");
console.log("Is file:", s.isFile());
console.log("Is directory:", s.isDirectory());
console.log("Created:", s.birthtime);
console.log("Modified:", s.mtime);
console.log("Accessed:", s.atime);
