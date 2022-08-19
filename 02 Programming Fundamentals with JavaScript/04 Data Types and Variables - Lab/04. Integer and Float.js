function solve(num1, num2, num3) {
    let total = num1 + num2 + num3
    let type = total % 1 === 0
        ? 'Integer'
        : 'Float'
    console.log(`${total} - ${type}`)
}
