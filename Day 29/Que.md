Description:
Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
Solution Approach:
Use Promise.race and a timeout promise