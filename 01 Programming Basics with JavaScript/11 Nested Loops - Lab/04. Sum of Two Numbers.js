function solve(input) {
    let start = Number(input[0])
    let end = Number(input[1])
    let magicNumber = Number(input[2])
    let counter = 0
    let isFound = false
    for (x = start; x <= end; x++) {
        for (y = start; y <= end; y++) {
            counter++
            if (x + y == magicNumber) {
                isFound = true
                break
            }
        }
        if (isFound)
            break
    }
    if (isFound) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`)
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
} 