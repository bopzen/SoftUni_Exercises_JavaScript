function solve(input){
  let squareMeters = input[0];
  let totalPrice = squareMeters * 7.61;
  let discount = totalPrice * 0.18;
  totalPrice = totalPrice - discount;
  console.log(`The final price is: ${totalPrice} lv.`)
  console.log(`The discount is: ${discount} lv.`)
  
}