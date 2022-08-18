function solve(input) {
    let city = input[0]
    let sales = Number(input[1])
    let commissionPercent = 0
    let isInvalid = false
    switch (city) {
        case 'Sofia':
            if (sales > 10000) {
                commissionPercent = 12
            } else if (sales > 1000) {
                commissionPercent = 8
            } else if (sales > 500) {
                commissionPercent = 7
            } else if (sales >= 0) {
                commissionPercent = 5
            } else {
                isInvalid = true
            }
            break
        case 'Varna':
            if (sales > 10000) {
                commissionPercent = 13
            } else if (sales > 1000) {
                commissionPercent = 10
            } else if (sales > 500) {
                commissionPercent = 7.5
            } else if (sales >= 0) {
                commissionPercent = 4.5
            } else {
                isInvalid = true
            }
            break
        case 'Plovdiv':
            if (sales > 10000) {
                commissionPercent = 14.5
            } else if (sales > 1000) {
                commissionPercent = 12
            } else if (sales > 500) {
                commissionPercent = 8
            } else if (sales >= 0) {
                commissionPercent = 5.5
            } else {
                isInvalid = true
            }
            break
        default:
            isInvalid = true
    }
    if (isInvalid) {
        console.log('error')
    } else {
        let totalCommission = sales * commissionPercent / 100
        console.log(totalCommission.toFixed(2))
    }
}