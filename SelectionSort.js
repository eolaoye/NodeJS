const input = [10, 2, 30, 45, 200, 5, 10, 20, 89, 9, 1];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        // the previous index has been sorted so if the value at this index 
        // is the same then we can safely continue to the next index
        if (i > 0 && array[i] === array[i - 1]) {
            continue;
        }

        let smallestValueIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestValueIndex]) {
                smallestValueIndex = j;
            }
        }

        switchIndices(array, i, smallestValueIndex);
    }

    return array;
}

function switchIndices(array, index1, index2) {
    if (index1 !== index2) {
        const holdingValue = array[index1];
        array[index1] = array[index2];
        array[index2] = holdingValue;
    }
}

console.log(selectionSort(input));