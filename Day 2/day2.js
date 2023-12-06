
const solve = (str) => {
    return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

let str = 'the quick brown fox';
let ans = solve(str);
console.log(ans);