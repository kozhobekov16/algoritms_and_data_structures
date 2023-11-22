const arr = [1, 45, 2, 65, 85, 3, 85, -45, 89]

const len = arr.length

const bubbleSort = (array: number[]) => {
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))