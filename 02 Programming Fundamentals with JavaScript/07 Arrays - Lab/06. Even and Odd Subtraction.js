function solve(arr) {
    let sumEven = 0
    let sumOdd = 0
    for (let element of arr) {
        if (element % 2 == 0) {
            sumEven += element
        } else {
            sumOdd += element
        }
    }
    console.log(sumEven - sumOdd)
    
}