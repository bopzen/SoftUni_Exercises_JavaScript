function solve(arr) {
    let matrix = []
    let width = arr[0]
    let height = arr[1]
    let x = arr[2]
    let y = arr[3]
    for (let i = 0; i < width; i++) {
        let row = []
        for (let j = 0; j < height; j++) {
            row.push(0)
        }
        matrix.push(row)
    } 
    matrix[x][y] = 1
    let value = 2
    while (value <= width) {
        for (let r = x - value + 1; r <= x + value - 1; r++) {
            for (let c = y - value + 1; c <= y + value - 1; c++) {
                if (r < 0 || r >= matrix.length || y < 0 || y >= matrix.length) {
                    continue
                }
                if (matrix[r][c] == 0) {
                    matrix[r][c] = value
                }
            }
        }

        value++
    }
    for (let row of matrix) {
        console.log(row.join(" "))
    }
}