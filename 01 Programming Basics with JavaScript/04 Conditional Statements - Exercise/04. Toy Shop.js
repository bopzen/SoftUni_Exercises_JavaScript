function solve(input) {
    let tripPrice = Number(input[0]);
    let countPuzzles = Number(input[1]);
    let countDolls = Number(input[2]);
    let countTeddyBears = Number(input[3]);
    let countMinions = Number(input[4]);
    let countTrucks = Number(input[5]);
    
    let countAllToys = countPuzzles + countDolls + countTeddyBears + countMinions + countTrucks
    let revenue = countPuzzles * 2.6 + countDolls * 3 + countTeddyBears * 4.1 + countMinions * 8.2 + countTrucks * 2
    
    if (countAllToys >= 50) {
        revenue -= revenue * 0.25
    }
    let profit = revenue - revenue * 0.1
    if (profit >= tripPrice) {
        let moneyLeft = profit - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        let moneyNeeded = tripPrice - profit
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
    
}