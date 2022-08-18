function solve(input) {
    let number = input[0]
    let totalSum = 0
    for (let digit of number){
        totalSum += Number(digit)
    }
    console.log(`The sum of the digits is:${totalSum}`)
}