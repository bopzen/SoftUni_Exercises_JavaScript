function solve(input){
  let countPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);
  let neededHoursPerDay = countPages / pagesPerHour / days
  console.log(neededHoursPerDay)
}