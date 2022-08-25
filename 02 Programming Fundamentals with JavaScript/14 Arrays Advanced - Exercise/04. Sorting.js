function solve(arr) {
    arr.sort((a,b) => a-b)
    let sortedArr = []
    while (arr.length > 0) {
        sortedArr.push(arr.pop())
        sortedArr.push(arr.shift())
    }
    console.log(sortedArr.join(" "))
}