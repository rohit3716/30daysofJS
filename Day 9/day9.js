function firstNonRepeatedChar(str){
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if( str.indexOf(element) === str.lastIndexOf(element)){
            return element;
        }
    }
    return null;
}

const str = 'abacddbec';
const res = firstNonRepeatedChar( str );

console.log('First non repeated char: ' + res);