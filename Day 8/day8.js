function generateSubsets( arr, k, start, curr, result){
    if( curr.length === k ){
        result.push([...curr]);
        return;
    }

    if( start < arr.length ){
        curr.push(arr[start]);
        generateSubsets( arr, k, start+1, curr, result);
        curr.pop();
        generateSubsets(arr, k, start+1, curr, result)
    }

    return result;
}

const arr = [1, 2, 3];
const subsetLength = 2;
let res = generateSubsets( arr, subsetLength, 0, [], []);

console.log(res);