function pairChecker(a, b) {
    return ( ((a === 50 ) || (b === 50 )) || ( a+b === 50 ));
}

console.log(pairChecker(25, 25));
console.log(pairChecker(20, 22));
console.log(pairChecker(30, 50));