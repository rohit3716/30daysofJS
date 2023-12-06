function throttle( func, interval ){
    let lastInvocationTime = 0;

    return function( ...args ){
        const currentTime = Date.now();

        if( currentTime-lastInvocationTime >= interval ){
            const result = func.apply(this, args );
            lastInvocationTime = currentTime;
            return result;
        }
        else{
            console.log('function throttled');
            return undefined;
        }
    }
}

function fn(){
    console.log('This function is called');
}

const throttledFunction = throttle( fn, 3000);

throttledFunction();

setTimeout(() => throttledFunction(), 1000);
setTimeout(() => throttledFunction(), 2000);


