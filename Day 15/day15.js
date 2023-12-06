function string_chop( str, x ) {
    let res = [];
    for (let index = 0; index < str.length; index += x) {
        res.push(str.slice(index, index + x))
    }

    if( x === undefined ){
        return [str];
    }

    return res;
}

console.log(string_chop('Scaler'));
console.log(string_chop('Scaler', 2));