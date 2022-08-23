function solve(arr) {
    let newArr = []
    let n = Number(arr[arr.length-1])
    for (let i = 0; i < arr.length-1; i += n) {
        newArr.push(arr[i])
    }
    console.log(newArr.join(" "))
}