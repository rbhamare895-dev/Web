const fs = require("fs");

try {
  fs.rmSync("demoDir", {recursive:true, force:true});
  fs.rmSync("renamedDir", {recursive:true, force:true});
  fs.mkdirSync("demoDir");
  fs.writeFileSync("demoDir/student.json", JSON.stringify({name:"Amit", marks:85}, null, 2));
  const obj = JSON.parse(fs.readFileSync("demoDir/student.json", "utf8"));
  console.log("Files:", fs.readdirSync("demoDir"));
  console.log("JSON:", obj);
  obj.marks = 90;
  fs.writeFileSync("demoDir/student.json", JSON.stringify(obj, null, 2));
  fs.renameSync("demoDir", "renamedDir");
  console.log("Directory renamed; JSON updated");
  fs.rmSync("renamedDir", {recursive:true, force:true});
  console.log("Directory deleted");
} catch (e) {
  console.log(e.message);
}
