const url = process.argv[2];
const localFilePath = process.argv[3];
const request = require("request");
const fs = require("fs");
const readline = require("readline");

request(url, (error, response, body) => {
  if (error) {
    console.log("There is an error: " + error);
    return;
  }
  fs.readFile(localFilePath, "utf8", (err, data) => {
    if (err) {
      console.log("The path does not exist!");
      return;
    }
    if (data.length > 0) {
      //whenever you 'createInterface' you will always need to end with an rl.close()
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(
        'The file already exists, do you want to over it? (if so press "Y/y") ',
        (answer) => {
          if (answer === "Y" || answer === "y") {
            fs.writeFile(localFilePath, body, (err) => {
              if (err) {
                console.log(`This is the error: ${err}`);
              }
              console.log(
                `Downloaded and saved ${body.length} bytes to ${localFilePath}`
              );
            });
            rl.close();
          } else {
            console.log("Okay goodbye!");
            rl.close();
          }
        }
      );
    } else {
      fs.writeFile(localFilePath, body, (err) => {
        if (err) {
          console.log("err");
          return;
        }
        console.log(
          `Downloaded and saved ${body.length} bytes to ${localFilePath}`
        );
        return;
      });
    }
  });
});
