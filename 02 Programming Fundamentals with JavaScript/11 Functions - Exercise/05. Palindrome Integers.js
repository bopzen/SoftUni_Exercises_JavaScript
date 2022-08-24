function solve(arr) {
    let index = 0
    while (index < arr.length) {
        let number = arr[index].toString()
        let reversedNumber = ""
        for (let i = number.length-1; i >= 0; i--) {
            reversedNumber += number[i]
        }
        let result = number == reversedNumber ? 'true' : 'false'
        console.log(result)
        index++
    }
    
}