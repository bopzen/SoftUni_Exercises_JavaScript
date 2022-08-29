function solve(arr, actions) {
    index = 0
    while (actions[index] != 'print') {
        let command = actions[index].split(" ")
        if (command[0] == 'add') {
            let i = command[1]
            let element = Number(command[2])
            arr.splice(i, 0, element)
        } else if (command[0] == 'addMany') {
            command.shift()
            let i = command.shift()
            for (let el of command) {
                arr.splice(i, 0, Number(el))
                i++
            }
        } else if (command[0] == 'contains') {
            console.log(arr.indexOf(Number(command[1])))
        } else if (command[0] == 'remove') {
            arr.splice(command[1], 1)
        } else if (command[0] == 'shift') {
            let positions = command[1]
            for (let i = 1; i <= positions; i++) {
                arr.push(arr.shift())
            }
        } else if (command[0] == 'sumPairs') {
            let sums = []
            for (let i = 0; i < arr.length; i++) {
                if (i % 2 == 0) {
                    if (i == arr.length - 1) {
                        sums.push(arr[i])  
                    } else {
                        sums.push(arr[i] + arr[i+1]) 
                    }
                }
            }
            arr = sums
        }
        
        index++
    }
    console.log("[", arr.join(", "), "]")
}