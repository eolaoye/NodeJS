//choose a pivot and move everything greater to the right 
//do this by replacing the item being moved to the right with the item 
//immediately to the left of the pivot.
//perform quick sort on the items to the left and to the right of the pivot

const input = [10, 2, 30, 45, 200, 5, 9, 10, 20, 89, 1];
// const input = [10, 2, 3, 10, 10, 10, 10, 10, 10, 9, 1];

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    //choose pivot as last item

    //perform switch incrementally
    let index = 0;
    let pivotIndex = array.length - 1;

    while (index < pivotIndex) {
        if (array[index] > array[pivotIndex]) {
            moveRight(array, index, pivotIndex);
            pivotIndex--
        }
        else {
            index++;
        }        
    }

    console.log(array);

    //determine whether elements to the left of the pivot are equal
    let pivotIndexArrayLength = 1;
    while(array[pivotIndex - 1] === array[pivotIndex]) {
        pivotIndex--;
        pivotIndexArrayLength++;
    }

    const arrayBeforePivot = array.splice(0, pivotIndex);
    const pivotArray = array.splice(0, pivotIndexArrayLength);

    //array to the right of the pivot will be the remaining items in the array

    return quickSort(arrayBeforePivot).concat(pivotArray).concat(quickSort(array));
}

//do this by replacing the item being moved to the right with the item 
//immediately to the left of the pivot.
//return the new value of the pivot index
function moveRight(array, index, pivotIndex) {

    const indexValue = array[index];
    //perform switch
    //move left of pivot item to the index
    array[index] = array[pivotIndex - 1];

    //move pivot item
    array[pivotIndex - 1] = array[pivotIndex];

    //move original index item to the pivot index
    array[pivotIndex] = indexValue;

}

console.log(quickSort(input));