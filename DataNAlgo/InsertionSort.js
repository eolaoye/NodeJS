const input = [10, 2, 30, 45, 200, 5, 10, 20, 89, 9, 1];

function insertionSort(array) {
    let sortedArray = [];
    sortedArray.push(array[0]);
    for (let i = 1; i < array.length - 1; i++) {
        // compare the value at i with the values before it

        //if value at i < value at the end of the sortedArray
        // insert it into the sorted array
        if (array[i] < sortedArray[sortedArray.length - 1])
        {
            sortedArray = insertElement(sortedArray, array[i]);
        }
        else {
            //if value at i >= value at the end of the sortedArray
            // add it to the sorted array;
            sortedArray.push(array[i]);
        }
        // console.log(array[i]);
        // console.log(sortedArray);
    }

    return sortedArray;
}

function insertElement(array, value) {
    let insertedArray = [];
    let indexAfterInsertion = 0;
    //loop until you get to the point of insertion
    for (let i = 0; i < array.length; i++) {
        if (array[i] < value) {
            insertedArray.push(array[i]);
            continue;
        }

        //insert the value at the point of insertion
        insertedArray.push(value);
        indexAfterInsertion = i
        break;
    }

    //add the rest of the array
    for (let j = indexAfterInsertion; j < array.length; j++) {
        insertedArray.push(array[j]);
    }

    return insertedArray;
}

console.log(insertionSort(input));