function solve(input) {
    let pencilPacks = Number(input[0]);
    let markersPacks = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discountPercent = Number(input[3])/100;
    
    let pricePencils = pencilPacks * 5.80
    let priceMarkers = markersPacks * 7.20
    let priceCleaner = cleanerLiters * 1.20
    
    let totalPrice = pricePencils + priceMarkers + priceCleaner
    totalPrice -= totalPrice * discountPercent
    
    console.log(totalPrice)
}