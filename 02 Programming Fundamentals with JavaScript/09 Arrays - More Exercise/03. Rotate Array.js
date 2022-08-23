function solve(arr) {
    let rotations = arr.pop()
    for (let i=1; i <= rotations; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(" "))
}