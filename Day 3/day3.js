function checkInRange(a, b){
    return ((a >= 50 && a <= 99 ) || (b >= 50 && b <= 99));
}

console.log(checkInRange(30, 57));
console.log(checkInRange(50, 99));
console.log(checkInRange(25, 105));