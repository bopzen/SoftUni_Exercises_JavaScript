function solve(arr1, arr2) {
    for (let element of arr1) {
        if (arr2.includes(element)) {
            console.log(element)
        }
    }
}