"use strict";
exports.__esModule = true;
function fizzbuzz(n) {
    for (var i = 0; i < n; i++) {
        if (i % 15) {
            console.log("fizzbuzz");
        }
        else if (i % 5) {
            console.log("buzz");
        }
        else if (i % 3) {
            console.log("fizz");
        }
        console.log(i);
    }
}
exports["default"] = fizzbuzz;
