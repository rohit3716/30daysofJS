function deepEqual( obj1, obj2 ){
    if( typeof obj1 === 'object' && obj1 != null && typeof obj2 === 'object' && obj2 != null ){
        const key1 = Object.keys(obj1);
        const key2 = Object.keys(obj2);

        if( key1.length !== key2.length ){
            return false;
        }

        for (const key of key1) {
            if( !key2.includes(key) || !deepEqual( obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }

    return obj1 === obj2;
}


const obj1 = {
    name: 'Ram',
    age: 20,
    address: {
        pin: '328733',
        city: 'Ayodhya',
    }
}

const obj2 = {
    name: 'Shyam',
    age: 21,
    address: {
        pin: '382784',
        city: 'Varanasi',
    }
}

const obj3 = {
    name: 'Ram',
    age: 20,
    address: {
        pin: '328733',
        city: 'Ayodhya',
    }
}
const isObjEqual = deepEqual( obj1, obj3);
console.log( isObjEqual );