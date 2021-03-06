var common = require("./common")
  , odbc = require("../")
  , db = new odbc.Database()
  , assert = require("assert")
  ;

assert.throws(function () {
  db.openSync("this is wrong");
});

assert.equal(db.connected, false);
  
db.open("this is wrong", function(err) {
  console.log(err);
  
  assert.deepEqual(err.message, '[IBM][CLI Driver] SQL1024N  A database connection does not exist.  SQLSTATE=08003\r\n');
  
  assert.equal(db.connected, false);
});
