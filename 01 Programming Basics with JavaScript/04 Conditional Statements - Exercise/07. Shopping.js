function solve(input) {
    let budget = Number(input[0])
    let gpu = Number(input[1])
    let cpu = Number(input[2])
    let ram = Number(input[3])
    let discount = 0
    let priceGpu = gpu * 250
    if (gpu > cpu) {
        discount = 0.15
    }
    let totalPrice = priceGpu + cpu * priceGpu * 0.35 + ram * priceGpu * 0.1
    totalPrice -= totalPrice * discount
    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}