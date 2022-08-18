function solve(input) {
    let width = Number(input[0])
    let length = Number(input[1])
    let height = Number(input[2])
    let space = width * length * height
    let index = 3
    let isFull = false
    while (input[index] != 'Done') {
        space -= Number(input[index])
        if (space <= 0) {
            isFull = true
            break
        }
        index++
    }
    if (isFull) {
        console.log(`No more free space! You need ${-space} Cubic meters more.`)
    } else {
        console.log(`${space} Cubic meters left.`)
    }
}