function solve(input) {
    let degrees = Number(input[0])
    let dayPart = input[1]
    let outfit = ""
    let shoes = ""
    switch (dayPart) {
        case 'Morning':
            if (degrees >= 25) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'
            } else if (degrees > 18) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            } else if (degrees >= 10) {
                outfit = 'Sweatshirt'
                shoes = 'Sneakers'
            }
            break
        case 'Afternoon':
            if (degrees >= 25) {
                outfit = 'Swim Suit'
                shoes = 'Barefoot'
            } else if (degrees > 18) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'
            } else if (degrees >= 10) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            }
            break
            
        case 'Evening':
            if (degrees >=10) {
                outfit = 'Shirt'
                shoes = 'Moccasins'
            }
            break
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}