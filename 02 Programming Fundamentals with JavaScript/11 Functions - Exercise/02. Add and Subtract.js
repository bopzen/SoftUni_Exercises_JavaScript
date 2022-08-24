function solve(numOne, numTwo, numThree) {
    function add(a, b) {
        return a + b
    }
    function subtract(a, b, c) {
        return add(a,b) - c
    }
    console.log(subtract(numOne, numTwo, numThree))
}