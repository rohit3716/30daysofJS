function memoization( func ){
    const cache = {};

    return function ( ...arguments ) {
        if( !(arguments in cache )){
            cache[arguments] = func( ...arguments);
        }
        return cache[arguments];
    };
};

function add(a, b) {
    console.log('Performing addition ...');
    return a+b;
}

const fnc = memoization(add);

console.log(fnc(2, 3));
console.log(fnc(2, 3));
console.log(fnc(3, 3));
console.log(fnc(2, 3));