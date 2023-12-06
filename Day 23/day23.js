function counter(){
    let count = 0;

    function inner(){
        count++;
        return count;
    }

    return inner;
}

const countFun1 = counter();
console.log(countFun1());
console.log(countFun1());
console.log(countFun1());
console.log(`Next Function:- `);

const countFun2 = counter();
console.log(countFun2());
console.log(countFun2());
console.log(countFun2());
