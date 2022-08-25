function solve(arr) {
    arr = arr.map(Number)
    let result = []
    for (let element of arr) {
        if (element < 0) {
            result.unshift(element)
        } else {
            result.push(element)
        }
    }
    console.log(result.join("\n"))
}