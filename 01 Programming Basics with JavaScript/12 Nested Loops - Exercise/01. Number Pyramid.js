function solve(input) {
    let n = Number(input[0])
    let printLine = ''
    let counter = 1
    let isDone = false
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols ++) {
            printLine += `${counter} `
            if (counter == n) {
                isDone = true
                break
            }
            counter++
        }
        console.log(printLine)
        printLine = ''
        if (isDone)
            break
    }
}