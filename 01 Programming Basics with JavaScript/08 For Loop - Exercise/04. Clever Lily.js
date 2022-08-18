function solve(input) {
    let age = Number(input[0])
    let priceLaundromat = Number(input[1])
    let priceToy = Number(input[2])
    let totalMoney = 0
    let money = 10
    let toys = 0
    for (i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            totalMoney += money - 1
            money += 10
        } else {
            toys += 1
        }
    }
    totalMoney += toys * priceToy
    if (totalMoney >= priceLaundromat) {
        console.log(`Yes! ${(totalMoney - priceLaundromat).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceLaundromat - totalMoney).toFixed(2)}`)
    }
}