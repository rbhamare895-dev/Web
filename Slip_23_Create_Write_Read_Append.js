const fs = require("fs");

fs.writeFile("data.txt", "First line", err => {
  if (err) throw err;
  fs.appendFile("data.txt", "\nSecond line", err => {
    if (err) throw err;
    fs.readFile("data.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});
