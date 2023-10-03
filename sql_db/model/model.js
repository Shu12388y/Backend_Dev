const db = require("../util/db");

class model {
  static fetch() {
    return db.execute("SELECT * FROM userdb");
  }
}

module.exports = model;
