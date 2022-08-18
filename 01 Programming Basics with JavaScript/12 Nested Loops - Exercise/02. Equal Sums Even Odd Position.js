function solve(input) {
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let printLine = ''
    for (let i = num1; i <= num2; i++) {
        let currentNum = i.toString()
        let sumEven = 0
        let sumOdd = 0
        for (let index = 0; index < currentNum.length; index++) {
            if (index % 2 == 0) {
                sumEven += Number(currentNum[index])
            } else {
                sumOdd += Number(currentNum[index])
            }
        }
        if (sumEven == sumOdd) {
            printLine += currentNum + ' '
        }
    }
    console.log(printLine)
}