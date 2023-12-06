function calculateTotal( arr ){
   return arr.filter( (num) => num %2 !== 0 )
            .map( (num) => num*num )
            .reduce(( acc, curr ) => acc+curr, 0); 
}

const arr = [2, 4, 5, 6, 7, 9];
let ans = calculateTotal(arr);

console.log(`Required answer: ${ans}`);