const fs = require("fs");

try {
  fs.unlinkSync("./third-text.txt");

  console.log("Delete File successfully.");
} catch (error) {
  console.log(error);
}
