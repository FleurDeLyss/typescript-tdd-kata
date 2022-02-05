export default function fizzbuzz(n: number) {
    var array :(string | number)[] = new Array(n) ;
    for (let i = 0; i < n; i++) {
        if (i % 15) {
            array[i]= "buzzfizz"
        } else if (i % 5) {
            array[i]= "buzz"
        } else if (i % 3) {
            array[i]= "fizz"
        }
        array[i]= i;
    }
    return array;
}