function solve(input) {
    let moneyNeeded = Number(input[0])
    let availableMoney = Number(input[1])
    let consecutiveDays = 0
    let days = 0
    let index = 2
    while (availableMoney < moneyNeeded && consecutiveDays < 5) {
        let action = input[index]
        let amount = Number(input[index+1])
        if (action == 'spend') {
            if (amount >= availableMoney) {
                availableMoney = 0
            } else {
                availableMoney -= amount
            }
            consecutiveDays += 1
        } else if (action == 'save') {
            availableMoney += amount
            consecutiveDays = 0
        }
        index += 2
        days++
    }
    if (consecutiveDays == 5) {
        console.log(`You can't save the money.`)
        console.log(`${days}`)
    }
    if (availableMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`)
    }
}