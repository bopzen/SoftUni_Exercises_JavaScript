function solve(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let totalPrice = chickenMenu * 10.35 + fishMenu * 12.40 + veggieMenu * 8.15
    totalPrice += totalPrice * 0.20
    totalPrice += 2.50
    console.log(totalPrice)
}