var sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database('sqlite:///lite.db');
var db = new sqlite3.Database('lite.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS fibonacci (id INT PRIMARY KEY, iterations INT, result UNSIGNED BIG INT, createdAt DATETIME, updatedAt DATETIME)");
});

db.close();
