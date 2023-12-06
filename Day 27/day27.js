function* range( start, end ){
    for( i = start; i <= end; i++){
        yield i;
    }
}

const start = 1;
const end = 7;

const numbersInRange = range( start, end );

//using the generator with for loop
for (const num of numbersInRange) {
    console.log(num);
}