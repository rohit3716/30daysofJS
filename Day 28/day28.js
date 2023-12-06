const info = {
    name: 'Mahatma Gandhi',
    place: 'Sabarmati Ashram'
}

const handler = new Proxy( info, {
    get:function( target, property, receiver ){
        return Reflect.get( target, property, receiver );
    }
});

console.log( handler.name);
console.log( handler.place);