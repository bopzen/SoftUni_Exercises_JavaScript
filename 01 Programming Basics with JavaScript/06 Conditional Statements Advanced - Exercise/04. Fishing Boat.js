function solve(input) {
    let budget = Number(input[0])
    let season = input[1]
    let countFishermen = Number(input[2])
    let rent = 0
    let discount = 0
    
    if (season == 'Spring') {
        rent = 3000
    } else if (season == 'Summer' || season == 'Autumn') {
        rent = 4200
    } else if (season == 'Winter') {
        rent = 2600
    }
    
    if (countFishermen <= 6) {
        discount = 0.1
    } else if (countFishermen <= 11) {
        discount = 0.15
    } else if (countFishermen >= 12) {
        discount = 0.25
    }
    rent -= rent * discount
    if (countFishermen % 2 == 0 && season != 'Autumn') {
        rent -= rent * 0.05
    }
    
    if (budget - rent >= 0) {
        let moneyLeft = budget - rent
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = rent - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}