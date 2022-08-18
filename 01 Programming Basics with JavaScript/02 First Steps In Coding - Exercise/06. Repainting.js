function solve(input) {
    let coverAmount = Number(input[0]);
    let paintAmount = Number(input[1]);
    let solverAmount = Number(input[2]);
    let hours = Number(input[3]);
    
    let priceMaterials = (coverAmount + 2) * 1.50 + (paintAmount + paintAmount * 0.10) * 14.50 + solverAmount * 5 + 0.40
    let priceWorkers = priceMaterials * 0.30 * hours
    let totalPrice = priceMaterials + priceWorkers
    console.log(totalPrice)
}