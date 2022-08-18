function solve(input) {
    let openTabs = Number(input[0])
    let salary = Number(input[1])
    let isLost = false
    for (i = 2; i < input.length; i++) {
        if (input[i] == 'Facebook') {
            salary -= 150
        }
        else if (input[i] == 'Instagram') {
            salary -= 100
        }
        else if (input[i] == 'Reddit') {
            salary -= 50
        }
        if (salary <= 0) {
            isLost = true
            break
        }
    }
    if (isLost) {
        console.log('You have lost your salary.')
    }
    else {
        console.log(`${salary.toFixed(0)}`)
    }
    
}