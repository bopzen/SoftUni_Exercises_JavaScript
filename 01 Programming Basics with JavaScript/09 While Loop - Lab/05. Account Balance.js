function solve(input) {
    let balance = 0
    let i = 0
    while (input[i] != 'NoMoreMoney') {
        if (Number(input[i]) < 0) {
            console.log('Invalid operation!')
            break
        }
        console.log(`Increase: ${Number(input[i]).toFixed(2)}`)
        balance += Number(input[i])
        i++
    }
    console.log(`Total: ${balance.toFixed(2)}`)
}