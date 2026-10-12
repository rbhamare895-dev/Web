const fs = require("fs");

console.log("Async operation started");
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) console.log("Async:", err.message);
  else console.log("Async read:", data);
});
console.log("This prints before async read finishes");

try {
  fs.writeFileSync("sync.txt", "Synchronous data");
  console.log("Sync read:", fs.readFileSync("sync.txt", "utf8"));
  console.log("Sync operation completed before next line");
} catch (err) {
  console.log(err.message);
}
