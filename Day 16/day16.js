function sumArray( total, cur ){
    return total+cur;
}

let arr = [ 2, 3, 4, 5];
console.log(`Sum of array: ${arr.reduce(sumArray, 0)} `);