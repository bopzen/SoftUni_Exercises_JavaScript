function solve(arr) {
    let arrIndex = []
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0    
        if (i != 0) {
            for (let j = 0; j < i; j++) {
                sumLeft += arr[j]
            }
        }
        let sumRight = 0
        if (i != arr.length-1) {
            for (let k = i+1; k < arr.length; k++) {
                sumRight += arr[k]
            }
        }
        if (sumLeft == sumRight) {
            arrIndex.push(i)
        }
    }
    if (arrIndex.length > 0) {
        console.log(arrIndex.join(" "))
    } else {
        console.log('no')
    }
}