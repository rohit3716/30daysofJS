function areaCalc(a, b, c, s){
    return Math.sqrt(s * (s-a) * (s-b) * (s-c));
}
let a = 5, b = 6, c = 7;
let s = ( a + b + c )/2;

console.log("The area of the triangle : " + areaCalc(a, b, c, s).toFixed(2));

