function solve(arr) {
    let number = 0
    let newArr = []
    for (let element of arr) {
        number++
        if (element == 'add') {
            newArr.push(number)
        } else if (element == 'remove') {
            newArr.pop()
        }
    }
    if (newArr.length > 0) {
        console.log(newArr.join(" "))
    } else {
        console.log('Empty')
    }
}