
function allPositive(arr){
    return arr.every( num => num > 0);
}

const arr1 = [2, 3, 4, 6];
const arr2 = [-2, 6, 7, 8, 9];

console.log( allPositive(arr1) );
console.log( allPositive(arr2) );
