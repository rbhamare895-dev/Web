const path = require("path");

const p = path.join("college", "practicals", "sample.txt");
console.log("Join:", p);
console.log("Resolve:", path.resolve(p));
console.log("Base name:", path.basename(p));
console.log("Extension:", path.extname(p));
console.log("Directory:", path.dirname(p));
