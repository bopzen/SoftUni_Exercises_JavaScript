function solve(number) {
    let num = number.toString()
    let sumEven = 0
    let sumOdd = 0
    for (let ch of num) {
        if (Number(ch) % 2 == 0) {
            sumEven += Number(ch)
        } else {
            sumOdd += Number(ch)
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
    
}