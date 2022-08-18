function solve(input) {
    let number = Number(input[0])
    let totalSum = 0
    let index = 1
    while (totalSum < number) {
        totalSum += Number(input[index])
        index++
    }
    console.log(totalSum)
}