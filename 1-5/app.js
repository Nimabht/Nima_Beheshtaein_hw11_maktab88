const fs = require("fs");
fs.readFile("./user-data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  let userData = JSON.parse(jsonString);
  console.log(userData.filter((user) => user.age > 18));
});
