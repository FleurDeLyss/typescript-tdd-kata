// Importing the default export module 
// from the location of the file.
var fizzbuzz = require("./fizzbuzz");
// Creating an object of the
// class which is imported
var msg = fizzbuzz(30);
for (var index = 0; index < msg.length; index++) {
    console.log(msg[index]);
}
