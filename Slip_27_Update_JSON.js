const fs = require("fs");
const file = "student.json";

fs.writeFileSync(file, JSON.stringify({name:"Amit", marks:70}, null, 2));
const student = JSON.parse(fs.readFileSync(file, "utf8"));
student.marks = 90;
student.grade = "A";
fs.writeFileSync(file, JSON.stringify(student, null, 2));
console.log("Updated JSON:", JSON.parse(fs.readFileSync(file, "utf8")));
