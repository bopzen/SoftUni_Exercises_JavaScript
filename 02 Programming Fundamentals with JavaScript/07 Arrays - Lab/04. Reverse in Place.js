function solve(arr) {
    for (let i = 0; i < arr.length /2; i++) {
        let leftValue = arr[i]
        let rightValue = arr[arr.length - 1 - i]
        arr[i] = rightValue
        arr[arr.length -1 - i] = leftValue
    }
    console.log(arr.join(" "))
}