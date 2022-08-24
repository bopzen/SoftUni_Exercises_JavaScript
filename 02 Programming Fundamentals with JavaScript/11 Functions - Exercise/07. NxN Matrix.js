function solve(n) {
    let matrix = []
    for (let i = 0; i < n; i++) {
        let arr = []
        for (let j = 0; j < n; j++) {
            arr.push(n)
        }
        matrix.push(arr)
    }
    for (let row of matrix) {
        console.log(row.join(" "))
    }
    
}