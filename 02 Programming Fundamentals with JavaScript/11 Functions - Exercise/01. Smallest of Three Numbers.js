function findSmallest(numOne, numTwo, numThree) {
    let min = 0
    if (numOne < numTwo && numOne < numThree) {
        min = numOne
    } else if (numTwo < numOne && numTwo < numThree) {
        min = numTwo
    } else {
        min = numThree
    }
    console.log(min)
}