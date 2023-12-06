function firstNeg( arr ){
    return arr.find( num => num < 0 );
}

const arr = [2, 4, 5, -6, -7, 8, -9];

console.log(`First Negative number :   ${firstNeg(arr)}`);