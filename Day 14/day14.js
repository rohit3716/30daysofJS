function repeat( str, x = 1 ){
    var s = str;
    for (let i = 1; i < x; i++) {
        s += str;
    }
    return s;
    // return str.repeat(x);
}

console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));