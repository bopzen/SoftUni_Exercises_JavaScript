function solve(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0
        let num = i
        while (num > 0) {
            let digit = num % 10
            sum += digit
            num = num / 10
            num = parseInt(num)
        }
        let result = sum == 5 || sum == 7 || sum == 11
            ? 'True'
            : 'False'
        console.log(`${i} -> ${result}`)
    }
}