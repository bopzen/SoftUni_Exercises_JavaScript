function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0
    let helmet = 0
    let sword = 0
    let shield = 0
    let armor = 0
    let counterShield = 0
    for (let fight = 1; fight <= lostFightsCount; fight++) {
        if (fight % 2 == 0) {
            helmet++
        }
        if (fight % 3 == 0) {
            sword++
        }
        if (fight % 2 == 0 && fight % 3 == 0) {
            shield++
            counterShield++
        }
        if (counterShield == 2) {
            armor++
            counterShield = 0
        }
    }
    expenses = helmet *helmetPrice + sword * swordPrice + shield * shieldPrice + armor * armorPrice
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}