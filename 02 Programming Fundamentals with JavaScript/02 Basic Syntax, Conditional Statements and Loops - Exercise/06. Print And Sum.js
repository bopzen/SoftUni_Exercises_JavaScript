function solve(num1, num2) {
    let printLine = ''
    let totalSum = 0
    for (let i = num1; i <= num2; i++) {
        printLine += i + " "
        totalSum += i
    }
    console.log(printLine)
    console.log(`Sum: ${totalSum}`)
} 