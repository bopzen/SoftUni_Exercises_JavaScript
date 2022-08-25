function solve(arr) {
    let train = arr.shift().split(" ").map(Number)
    let capacity = Number(arr.shift())
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ")
        if (command[0] == 'Add') {
            train.push(Number(command[1]))
        } else {
            for (let i = 0; i < train.length; i++) {
                if (train[i] + Number(command[0]) <= capacity) {
                    train[i] += Number(command[0])
                    break
                }
            }
        }
    }
    console.log(train.join(" "))
}