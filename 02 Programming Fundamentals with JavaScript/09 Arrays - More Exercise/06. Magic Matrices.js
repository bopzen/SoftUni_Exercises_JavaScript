function solve(arr) {
    let sum = 0
    let isMagic = true
    for (let i = 0; i < arr[0].length; i++) {
        sum += arr[0][i]
    }
    for (let row = 0; row < arr.length; row++) {
        let currentSum = 0
        for (let col = 0; col < arr.length; col++) {
            currentSum += arr[row][col]
        }
        if (currentSum != sum) {
            isMagic = false
            break
        }
    }
    for (let col = 0; col < arr.length; col++) {
        let currentSum = 0
        for (let row = 0; row < arr.length; row++) {
            currentSum += arr[row][col]
        }
        if (currentSum != sum) {
            isMagic = false
            break
        }
    }
    console.log(isMagic)
}