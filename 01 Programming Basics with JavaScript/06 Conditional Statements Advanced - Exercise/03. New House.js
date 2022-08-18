function solve(input) {
    let flower = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])
    let totalPrice = 0
    if (flower == 'Roses') {
        totalPrice = count * 5
        if (count > 80) {
            totalPrice -= totalPrice * 0.1
        }
    } else if (flower == 'Dahlias') {
        totalPrice = count * 3.80
        if (count > 90) {
            totalPrice -= totalPrice * 0.15
        }
    } else if (flower == 'Tulips') {
        totalPrice = count * 2.80
        if (count > 80) {
            totalPrice -= totalPrice * 0.15
        }
    } else if (flower == 'Narcissus') {
        totalPrice = count * 3
        if (count < 120) {
            totalPrice += totalPrice * 0.15
        }
    } else if (flower == 'Gladiolus') {
        totalPrice = count * 2.50
        if (count < 80) {
            totalPrice += totalPrice * 0.2
        }
    }
    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = totalPrice - budget
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}