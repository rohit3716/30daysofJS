function raceWithTimeout( promises, timeout ){
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject( new Error('Timeout Exceeded '));
        }, timeout)
    })
    return Promise.race([ ...promises, timeoutPromise]);
}

const promise1 = new Promise((resolve) => setTimeout( () => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout( () => resolve('Promise 2 resolved'), 500));


const promiseArray = [promise1, promise2];
const timeoutValue = 2000;


raceWithTimeout(promiseArray, timeoutValue)
    .then( (result) => {
        console.log('Resolved: ', result);
    })
    .catch((error) => {
        console.log('Rejected: ', error.message);
});