module.exports = function (n: number) {
    for (let i = 0; i < n; i++) {
        if (i % 15) {

        } else if (i % 5) {

        } else if (i % 3) {
            console.log();
        }
        console.log(i);
    }
};