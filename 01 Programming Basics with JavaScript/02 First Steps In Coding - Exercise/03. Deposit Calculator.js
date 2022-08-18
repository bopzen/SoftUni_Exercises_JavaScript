function solve(input){
  let depositAmount = Number(input[0]);
  let depositMonths = Number(input[1]);
  let annualInterest = Number(input[2]/100);
  let interestPaid = depositAmount + depositMonths * (depositAmount * annualInterest / 12);
  console.log(interestPaid);
}