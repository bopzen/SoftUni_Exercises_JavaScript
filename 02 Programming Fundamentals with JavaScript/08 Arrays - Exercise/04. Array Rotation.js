function solve(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        arr.push(arr.shift())
    }
    console.log(arr.join(" "))
}