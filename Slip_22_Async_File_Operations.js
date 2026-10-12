const fs = require("fs");

fs.writeFile("sample.txt", "Hello Node.js", err => {
  if (err) return console.log(err.message);
  console.log("File written");
  fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) return console.log(err.message);
    console.log("Read:", data);
    fs.appendFile("sample.txt", "\nNew data", err => {
      if (err) return console.log(err.message);
      console.log("Data appended");
    });
  });
});
