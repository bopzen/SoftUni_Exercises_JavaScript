function solve(arr) {
    let longest = []
    let current = []
    for (let i = 0; i < arr.length-1; i++) {
        let checkNumber = arr[i]
        current.push(checkNumber)
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] == checkNumber) {
                current.push(arr[j])
            } else {
                break
            }
        }
        if (current.length > longest.length) {
            for (let i = 0; i < current.length; i++) {
                longest[i] = current[i]
            }
            current = []
        } else {
            current = []
        }
    }
    console.log(longest.join(" "))
    
}