const fs = require("fs");

fs.readFile("verbesIrregulier", "utf8", (err, data) => {
  console.log(data + " Alex");
});
