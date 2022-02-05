import fizzbuzz from "./fizzbuzz";

let number = 30;
var msg: (string | number)[] = fizzbuzz(number);

for (let index = 1; index < (number); index++) {
    console.log(msg[index]);
}
