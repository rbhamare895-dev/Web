const fs = require("fs");
const r = require("readline").createInterface({input:process.stdin, output:process.stdout});
r.question("1.Create/Write 2.Read 3.Update 4.Rename 5.Delete: ", c => {
  const f = "notes.txt";
  try {
    if (c === "1") fs.writeFileSync(f, "Hello Node.js");
    else if (c === "2") console.log(fs.readFileSync(f, "utf8"));
    else if (c === "3") fs.appendFileSync(f, "\nUpdated data");
    else if (c === "4") fs.renameSync(f, "newnotes.txt");
    else if (c === "5") fs.unlinkSync(f);
    else console.log("Invalid choice");
    if (["1","3","4","5"].includes(c)) console.log("Operation completed");
  } catch (e) { console.log(e.message); }
  r.close();
});
