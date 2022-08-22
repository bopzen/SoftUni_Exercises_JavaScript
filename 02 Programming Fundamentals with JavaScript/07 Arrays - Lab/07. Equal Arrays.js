function solve(arr1, arr2) {
    let isEqual = true
    let sum = 0
    let index = 0
    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) == Number(arr2[i])) {
            sum += Number(arr1[i])
        } else {
            isEqual = false
            index = i
            break
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
    
}