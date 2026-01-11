const fs = require("fs");

// parametre olarak aldığı veri ile json dosyasının içeriğini günceller
module.exports = (appointments) => {
  fs.writeFile(`${__dirname}/../data/db.json`, JSON.stringify(appointments), (err) => {
    if (err) console.log(err);
    return;
  });
};
