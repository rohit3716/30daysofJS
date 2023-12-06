function reverse(data){
    let num = data.toString();
    let res = num.split('').reverse().join('');
    return parseInt(res);
}
const data = 32243;
const revData = reverse(data);
console.log(revData);