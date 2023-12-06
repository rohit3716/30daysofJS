
function getExtensionName( fileName ){
    return fileName.split('.').pop();
}
const fileName1 = 'abc.img';
const fileName2 = 'day5.js';
const fileName3 = 'abc.pdf';
console.log(getExtensionName(fileName1));
console.log(getExtensionName(fileName2));
console.log(getExtensionName(fileName3));

 