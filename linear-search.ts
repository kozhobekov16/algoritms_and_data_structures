const arr = [14, 45, 17, 7, 8, 9, 2, 15, 18, 85, 65, 53]
let count = 0
const binarySearch = (array: number[], index: number) => {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === index) return i
    }
    return null
}
console.log(binarySearch(arr, 7));
console.log(count);