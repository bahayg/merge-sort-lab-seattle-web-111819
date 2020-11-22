function findMinAndRemoveSorted(array) {
    let min = array[0]
    let minIndex = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIndex = i
        }
        array = array.splice(minIndex, 1)
    }
    return min
}

function merge(array1, array2) {
    let sorted = []
    while(array1.length !== 0 && array2.length !== 0) {
        if (array1[0] < array2[0]) {
            sorted.push(findMinAndRemoveSorted(array1))
        } else {
            sorted.push(findMinAndRemoveSorted(array2))
        }     
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
    let middle = array.length / 2
    let first = array.slice(0, middle)
    let second = array.slice(middle, array.length)
    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(first), mergeSort(second))
    }
}
