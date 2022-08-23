function solve(x, y) {
    let number = 1
    let max = x * y
    let offset = 0
    let matrix = []
    let row = 0
    let col = 0
    for (let i = 0; i < x; i++) {
        let arr = []
        for (let j = 0; j < y; j++){
            arr.push(0)
        }
        matrix.push(arr)
    }
    while (true) {
        for (let i = 1; i <= x - offset; i++) {
            matrix[row][col] = number
            number++
            col++
        }
        col--
        row++
        offset++
        if (number == max + 1) 
            break
        for (let i = 1; i <= y - offset; i++) {
            matrix[row][col] = number
            number++
            row++
        }
        row--
        col--
        if (number == max + 1) 
            break
        for (let i = 1; i <= x - offset; i++) {
            matrix[row][col] = number
            number++
            col--
        }
        col++
        row--
        offset++
        if (number == max + 1) 
            break
        for (let i = 1; i <= y - offset; i++) {
            matrix[row][col] = number
            number++
            row--
        }
        row++
        col++
        if (number == max + 1) 
            break
    }
    for (let row of matrix){
        console.log(row.join(' '))
    }
}