const fs = require("fs");

const content = "Added Text! \n";

fs.appendFile("./text.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Text added to text.txt");
});

//-----------------------------------------------
// if (fs.existsSync("./text.txt")) {
//   fs.appendFile("./text.txt", content, (err) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log("Text added to text.txt");
//   });
// } else {
//   fs.appendFile("./text.txt", "Hello world!", (err) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log("Text added to text.txt");
//   });
// }
