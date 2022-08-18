function solve(input) {
    let destination = input[0]
    let budget = Number(input[1])
    let index = 2
    let saved = 0
    while (destination != 'End') {
        while (saved < budget) {
            saved += Number(input[index])
            index++
        }
        console.log(`Going to ${destination}!`)
        saved = 0
        destination = input[index]
        index++
        budget = Number(input[index])
        index++
    }
}