function solve(numOne, numTwo, operator) {
    let res = 0
    let multiply = (a, b) => a * b
    let divide = (a, b) => a / b
    let add = (a, b) => a + b
    let subtract = (a,b) => a - b
    switch (operator) {
        case 'multiply':
            res = multiply(numOne, numTwo)
            break
        case 'divide':
            res =divide(numOne, numTwo)
            break
        case 'add':
            res =add(numOne, numTwo)
            break
        case 'subtract':
            res =subtract(numOne, numTwo)
            break
    }
    console.log(res)
}