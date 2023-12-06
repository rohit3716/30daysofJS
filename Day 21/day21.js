async function asyncLoop( array, asyncFunc){
    for (const element of array) {
        await asyncFunc(element);
    }
}

const arr = [1, 2, 4, 5, 6, 7];

async function myAsyncFunction( element ){
    console.log(`Processing Element: ${element}`)
    await new Promise( resolve => setTimeout( resolve, 1000));
    console.log(`Finished processing element: ${element}`);
}

asyncLoop( arr, myAsyncFunction);