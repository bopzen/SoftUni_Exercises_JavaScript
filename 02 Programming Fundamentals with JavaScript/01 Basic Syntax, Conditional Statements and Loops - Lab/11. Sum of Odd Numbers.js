function solve(n) {
    let counter = 1
    let sumNumbers = 0
    let number = 1
    while (counter <= n) {
        if (number % 2 != 0) {
            console.log(number)
            sumNumbers += number
            counter++
        }
        number++
    }
    console.log(`Sum: ${sumNumbers}`)
}