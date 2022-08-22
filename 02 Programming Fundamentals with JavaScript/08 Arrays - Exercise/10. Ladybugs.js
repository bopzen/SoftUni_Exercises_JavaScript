function solve(arr) {
    let fieldSize = arr[0]
    let positions = arr[1].split(" ")
    for (let i = 0; i < positions.length; i++) {
        positions[i] = Number(positions[i])
    }
    let field = []
    for (let i = 0; i < fieldSize; i++) {
        if (positions.includes(i)) {
            field[i] = 1
        } else {
            field[i] = 0
        }
    }
    let index = 2
    while (index < arr.length) {
        let action = arr[index].split(" ")
        let position = Number(action[0])
        let direction = action[1]
        let flyLength = Number(action[2])
        if (field[position] == 1 && position >= 0 && position < field.length) {
            field[position] = 0
            if (direction == 'right') {
                position += flyLength
                while (position < field.length) {
                    if (field[position] == 0) {
                        field[position] = 1
                        break
                    } else {
                        position += flyLength
                    }
                }
            } else if (direction == 'left') {
                position -= flyLength
                while (position >= 0) {
                    if (field[position] == 0) {
                        field[position] = 1
                        break
                    } else {
                        position -= flyLength
                    }
                }
            }
        }
        index++
    }
    console.log(field.join(" "))
    
}