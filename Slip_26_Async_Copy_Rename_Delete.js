const fs = require("fs");

fs.writeFile("a.txt", "File operation example", err => {
  if (err) return console.log(err.message);
  fs.copyFile("a.txt", "b.txt", err => {
    if (err) return console.log(err.message);
    console.log("Copied");
    fs.rename("b.txt", "c.txt", err => {
      if (err) return console.log(err.message);
      console.log("Renamed");
      fs.unlink("c.txt", err => {
        if (err) return console.log(err.message);
        console.log("Deleted");
      });
    });
  });
});
