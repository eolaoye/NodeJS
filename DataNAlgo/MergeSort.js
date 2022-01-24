const input = [10, 2, 30, 45, 200, 5, 10, 20, 89, 9, 1];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    //extract the first half of the array into the left array
    const leftHalf = array.splice(0, Math.ceil(array.length / 2));

    //splice removes the elements and returns an array of the removed elements

    return merge(
        mergeSort(leftHalf),
        mergeSort(array)
    );
}

function merge(array1, array2) {
    const result = [];
    while (array1.length > 0 || array2.length > 0) {
        if (array2.length === 0) {
            // it means array1 > array2 and we can just add array1 to the result
            for (let i = 0; i < array1.length; i++) {
                result.push(array1[i]);
            }            
            break;
        }

        if (array1.length === 0) {
            for (let i = 0; i < array2.length; i++) {
                result.push(array2[i]);
            }            
            break;
        }
        
        if (array1[0] < array2[0]) {
            result.push(array1.splice(0, 1)[0]);
        }
        else {
            result.push(array2.splice(0, 1)[0]);
        }
    }

    return result;
}

console.log(mergeSort(input));