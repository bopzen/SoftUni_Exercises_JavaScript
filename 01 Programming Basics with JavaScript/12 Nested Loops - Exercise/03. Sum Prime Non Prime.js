function solve(input) {
    let index = 0
    let primeSum = 0
    let nonPrimeSum = 0
    while (input[index] != 'stop') {
        let currentNumber = Number(input[index])
        let isPrime = true
        if (currentNumber < 0) {
            console.log('Number is negative.')
            index++
            continue
        } else if (currentNumber <= 1) {
            isPrime = false
        } else {
            for (i=2; i <= currentNumber-1; i++) {
                if (currentNumber % i == 0) {
                    isPrime = false
                    break
                }
            }
        }
        if (isPrime) {
            primeSum += currentNumber
        } else {
            nonPrimeSum += currentNumber
        }
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}