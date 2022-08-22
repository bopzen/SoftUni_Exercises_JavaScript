function solve(arr) {
    let topArr = []
    for (let i = 0; i < arr.length; i++) {
        let isTop = true
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTop = false
                break
            }
        }
        if (isTop) {
            topArr.push(arr[i])
        }
    }
    console.log(topArr.join(" "))
}