const input = [10, 2, 30, 45, 200, 5, 10, 20, 89, 9, 1];

function bubbleSort(array) {
    let sortedIndex = array.length;

    while(sortedIndex > 0) {        
        for (let i = 0; i < sortedIndex - 1; i++){
            if (array[i] > array[i + 1]) {
                switchIndex(array, i);
            }
        }
        sortedIndex--;
    }

    return array;
}

function switchIndex(array, index) {
    const holdingValue = array[index];
    array[index] = array[index + 1];
    array[index + 1] = holdingValue;
}

console.log(bubbleSort(input));