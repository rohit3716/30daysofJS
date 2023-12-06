const arr = [ 1, 3, 5, 6, 7, 8, 9];

const doubleVal = (arr) => {
    return arr.map( num => 2*num );
}

console.log(doubleVal(arr));