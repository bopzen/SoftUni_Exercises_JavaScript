function solve(arr) {
    let guests = []
    for (let i = 0; i < arr.length; i++) {
        let message = arr[i].split(" ")
        let name = message[0]
        if (message.includes('not')) {
            if (guests.includes(name)) {
                let index = guests.indexOf(name)
                guests.splice(index,1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                guests.push(name)
            }
        }
    }
    console.log(guests.join("\n"))
}