function solve(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    for (let el of arr) {
        if (el % 2 == 0) {
            sum += el 
        }
    }
    console.log(sum)
}