function solve(input) {
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let totalSum = 0
    let arrNum = []
    for (i = num1; i <= num2; i++){
        if (i % 9 == 0) {
            totalSum += i
            arrNum.push(i)
        }
    }
    console.log(`The sum: ${totalSum}`)
    console.log(arrNum.join('\n'))
}