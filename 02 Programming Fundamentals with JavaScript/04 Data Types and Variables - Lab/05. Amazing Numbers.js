function solve(number) {
    number = number.toString()
    let sum = 0
    for (let digit of number) {
        sum += Number(digit)
    }
    let result = sum.toString().includes('9')
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`)
}