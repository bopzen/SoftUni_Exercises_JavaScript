function solve(arr) {
    let matrix = []
    let leftSum = 0
    let rightSum = 0
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(" ").map(Number))
    }
    for (let i = 0; i < matrix.length; i++) {
        leftSum += matrix[i][i]
    }
    for (let i = matrix.length-1; i >= 0; i--) {
        rightSum += matrix[i][i]
    }
    if (leftSum == rightSum) {
        for (let x = 0; x < arr.length; x++) {
            for (let y = 0; y < arr.length; y++) {
                if (x != y && x != matrix.length-1-y) {
                    matrix[x][y] = leftSum
                }
            }
        }
    }
    for (let row of matrix) {
        console.log(row.join(" "))
    }
}