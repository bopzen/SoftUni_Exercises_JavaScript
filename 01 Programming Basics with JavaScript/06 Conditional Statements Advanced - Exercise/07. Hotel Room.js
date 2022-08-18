function solve(input) {
    let month = input[0]
    let nights = Number(input[1])
    let priceApartment = 0
    let priceStudio = 0
    if (month == 'May' || month == 'October') {
        priceApartment = nights * 65
        priceStudio = nights * 50
        if (nights > 14) {
            priceStudio -= priceStudio * 0.3
            priceApartment -= priceApartment * 0.1
        } else if (nights > 7) {
            priceStudio -= priceStudio * 0.05
        }
    } else if (month == 'June' || month == 'September') {
        priceApartment = nights * 68.7
        priceStudio = nights * 75.2
        if (nights > 14) {
            priceStudio -= priceStudio * 0.2
            priceApartment -= priceApartment * 0.1
        }
    } else if (month == 'July' || month == 'August') {
        priceApartment = nights * 77
        priceStudio = nights * 76
        if (nights > 14) {
            priceApartment -= priceApartment * 0.1
        }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}