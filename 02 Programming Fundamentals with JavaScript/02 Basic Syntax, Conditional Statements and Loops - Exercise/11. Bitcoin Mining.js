function solve(input) {
    let bgnBalance = 0
    let BTCBalance = 0
    let dayFirstBTC = 0
    let hasBTC = false
    for (let index = 0; index < input.length; index++) {
        let gold = input[index]
        let day = index + 1
        if (day % 3 == 0) {
            gold -= gold * 0.3
        }
        bgnBalance += gold * 67.51
        let boughtBTC = Math.floor(bgnBalance / 11949.16)
        if (boughtBTC > 0) {
            BTCBalance += boughtBTC
            bgnBalance -= boughtBTC * 11949.16
            if (hasBTC == false) {
                dayFirstBTC = day
                hasBTC = true
            }
        }
    }
    console.log(`Bought bitcoins: ${BTCBalance}`)
    if (hasBTC)
        console.log(`Day of the first purchased bitcoin: ${dayFirstBTC}`)
    console.log(`Left money: ${bgnBalance.toFixed(2)} lv.`)
}