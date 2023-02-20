const url = process.argv[2];
const localFilePath = process.argv[3];
const fs = require("fs");
const request = require("request");

request(url, (error, response, body) => {
  fs.writeFile(localFilePath, body, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(
      `Downloaded and saved ${body.length} bytes to ${localFilePath}`
    );
  });
});

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// request(url, (error, response, body) => {
//   if (error) {
//     console.log("error");
//   }

//   fs.readFile(localFilePath, function (errors, data) {
//     if (data.length > 0) {
//       console.log("Sorry file already exists");
//       rl.question(
//         `File already exists. Type Type "Y/y" to overwrite or type "Q/q" to exit: `,
//         (answer) => {
//           if (answer === "Q" || answer === "q") {
//             console.log("Quitting now");
//             rl.close();
//             return;
//           }
//           if (answer === "Y" || answer === "y") {
//             fs.writeFile(localFilePath, body, (err) => {
//               if (err) {
//                 console.log("error");
//                 console.log(err);
//                 rl.close();
//                 return;
//               }
//               console.log(
//                 `Downloaded and saved ${
//                   fs.statSync(localFilePath).size
//                 } bytes to ${localFilePath}`
//               );
//               rl.close();
//             });
//             return;
//           }
//         }
//       );
//     } else {
//       fs.writeFile(localFilePath, body, (err) => {
//         if (err) {
//           console.error(err);
//           rl.close();
//           return;
//         }
//         console.log(
//           `Downloaded and saved ${
//             fs.statSync(response.body).size
//           } bytes to ${localFilePath}`
//         );
//       });
//     }
//   });
// });
