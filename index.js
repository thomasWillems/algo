paloArray = [];
for (x=0; x<string.length; x++) {
    for (y = x + 1; y < string.length; y++) {
        if (string[x] === string[y]) {
            let paloString = string.slice(x, y + 1);
            let stringReverse = paloString.split('').reverse().join('');
            if (paloString === stringReverse) {
                paloArray.push(paloString);

            }
        }
    }
}
console.log(paloArray);