function solve(input) {
    let fruit = input[0]
    let weekday = input[1]
    let quantity = Number(input[2])
    let price = 0
    let isInvalid = false
    if (weekday == 'Saturday' || weekday == 'Sunday') {
        if (fruit == 'banana') {
            price = 2.70
        } else if (fruit == 'apple') {
            price = 1.25
        } else if (fruit == 'orange') {
            price = 0.90
        } else if (fruit == 'grapefruit') {
            price = 1.60
        } else if (fruit == 'kiwi') {
            price = 3.00
        } else if (fruit == 'pineapple') {
            price = 5.60
        } else if (fruit == 'grapes') {
            price = 4.20
        } else {
            console.log('error')
        }
    } else if (weekday == 'Monday' || weekday == 'Tuesday' || weekday == 'Wednesday' || weekday == 'Thursday' || weekday == 'Friday') {
        if (fruit == 'banana') {
            price = 2.50
        } else if (fruit == 'apple') {
            price = 1.20
        } else if (fruit == 'orange') {
            price = 0.85
        } else if (fruit == 'grapefruit') {
            price = 1.45
        } else if (fruit == 'kiwi') {
            price = 2.70
        } else if (fruit == 'pineapple') {
            price = 5.50
        } else if (fruit == 'grapes') {
            price = 3.85
        } else {
            isInvalid = true
        }
    } else {
        isInvalid = true
    }
    if (isInvalid) {
        console.log('error')
    } else {
        let cost = quantity * price
        console.log(cost.toFixed(2))
    }

}