function solve(input) {
    let budget = Number(input[0])
    let countStatists = Number(input[1])
    let priceCostume = Number(input[2])
    let decor = budget * 0.1
    let discount = 0
    if (countStatists > 150) {
        discount = 0.1
    }
    priceCostume -= priceCostume * discount
    let cost = countStatists * priceCostume + decor
    if (budget >= cost) {
        let moneyLeft = budget - cost
        console.log('Action!')
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = cost - budget
        console.log('Not enough money!')
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }
}