module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }
     return  Number([...String(n)].reverse().join(''));
    }
