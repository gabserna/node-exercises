const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log(files);
});
const files = fs.readdirsync("./");
console.log(files);
//----------------------------------------
const fs = require("fs");
fs.readFile("./tmp/readme.md", { encoding: "utf8" }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
//----------------------------------------
const fs = require("fs");
fs.readFile(" ./tmp/readme.md", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
//----------------------------------------
const fs = require("fs");
const path = require("path");

fs.readdir("./lib", (err, files) => {
  if (err) throw err;
  files.forEach((fileName) => {
    const file = path.join(_dirname, "lib", fileName);
    fs.stat(file, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        fs.readFile(file, "utf8", (err, contents) => {
          if (err) throw err;
          console.log(`${fileName}: ${contents}`);
        });
      }
    });
  });
});
//----------------------------------------
const fs = require("fs");
fs.access("./tmp/message.txt", fs.constants.W_OK | fs.constants.R_OK, (err) => {
  if (err) console.log("file does not exist");
  console.log("file exists");
});
//----------------------------------------
fs.readFile(fileToRead, "utf8", (err, data) => {
  if (err) throw err;

  //word boundaries, global, case insensitive
  const baconRegex = /\bbacon\b/gi;
  const result = data.replace(baconRegex, "tasty");
  const count = data.match(baconRegex).length;
  console.log(count);
  fs.writeFile(fileToWrite, result, (err) => {
    if (err) throw err;
    console.log("file written");
  });
});