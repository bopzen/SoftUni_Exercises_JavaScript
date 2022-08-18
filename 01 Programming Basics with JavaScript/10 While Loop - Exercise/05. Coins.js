function solve(input) {
    let amount = Number(input[0])
    let coins = 0
    amount = Math.round(amount *100)
    while (amount > 0) {
        if (Math.floor(amount / 200) > 0) {
            coins += Math.floor(amount / 200)
            amount = amount % 200
        } else if (Math.floor(amount / 100) > 0) {
            coins += Math.floor(amount / 100)
            amount = amount % 100
        } else if (Math.floor(amount / 50) > 0) {
            coins += Math.floor(amount / 50)
            amount = amount % 50
        } else if (Math.floor(amount / 20) > 0) {
            coins += Math.floor(amount / 20)
            amount = amount % 20
        } else if (Math.floor(amount / 10) > 0) {
            coins += Math.floor(amount / 10)
            amount = amount % 10
        } else if (Math.floor(amount / 5) > 0) {
            coins += Math.floor(amount / 5)
            amount = amount % 5
        } else if (Math.floor(amount / 2) > 0) {
            coins += Math.floor(amount / 2)
            amount = amount % 2
        } else if (Math.floor(amount / 1) > 0) {
            coins += Math.floor(amount / 1)
            amount = amount % 1
        }
    }
    console.log(coins)
}