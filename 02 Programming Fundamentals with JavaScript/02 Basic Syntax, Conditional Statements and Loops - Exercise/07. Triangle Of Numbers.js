function solve(number) {
    let printLine = ""
    for (let row = 1; row <= number; row++) {
        printLine = ""
        for (let col = 1; col <= row; col++) {
            printLine += row + " "
        }
        console.log(printLine)
    }
} 