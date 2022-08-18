function solve(input) {
    let floors = Number(input[0])
    let rooms = Number(input[1])
    let letter = ''
    let printLine = ''
    for (let floor = floors; floor >= 1; floor--) {
        if (floor == floors) {
            letter = 'L'
        } else if (floor % 2 == 0) {
            letter = 'O'
        } else if (floor % 2 != 0) {
            letter = 'A'
        }
        for (room = 0; room < rooms; room++) {
            printLine += `${letter}${floor}${room} `
        }
        console.log(printLine)
        printLine = ''
    }   
    
}