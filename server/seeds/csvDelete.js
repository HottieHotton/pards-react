const csvUpload = require("./csvUpload");

module.exports = function csvDelete(req, res) {
  const fs = require("fs");
  const path = require("path");

  const directory = __dirname + "/csv/";

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }

    csvUpload(req, res);
  });
}