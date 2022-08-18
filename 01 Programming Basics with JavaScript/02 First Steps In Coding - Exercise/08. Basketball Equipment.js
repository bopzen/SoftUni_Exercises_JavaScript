function solve(input) {
    let annualFee = Number(input[0]);
    let shoes = annualFee - annualFee * 0.4
    let kit = shoes - shoes * 0.2
    let ball = kit / 4
    let accessories = ball / 5
    let totalPrice = annualFee + shoes + kit + ball + accessories
    console.log(totalPrice)
}