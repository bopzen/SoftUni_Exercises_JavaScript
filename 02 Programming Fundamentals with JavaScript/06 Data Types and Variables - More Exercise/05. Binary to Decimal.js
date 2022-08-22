function solve(binary) {
    binary = binary.toString()
    let decimal = 0
    let i = 1
    for (let digit of binary) {
        decimal += Number(digit) * 2 ** (binary.length-i)
        i++
    }
    console.log(decimal)
}