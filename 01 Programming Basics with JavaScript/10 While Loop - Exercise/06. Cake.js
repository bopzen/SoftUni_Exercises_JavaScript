function solve(input) {
    let width = Number(input[0])
    let length = Number(input[1])
    let pieces = width * length
    let isOver = false
    index = 2
    while (input[index] != 'STOP') {
        pieces -= Number(input[index])
        if (pieces <= 0) {
            isOver = true
            break
        }
        index++
    }
    if (isOver) {
        console.log(`No more cake left! You need ${-pieces} pieces more.`)
    } else {
        console.log(`${pieces} pieces are left.`)
    }
}