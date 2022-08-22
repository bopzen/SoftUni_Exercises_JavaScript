function solve(arr) {
    let actions = arr[0].split("|")
    let health = 100
    let coins = 0
    let isAlive = true
    let room = 0
    for (let element of actions) {
        tokens = element.split(" ")
        item = tokens[0]
        number = Number(tokens[1])
        room++
        if (item == 'potion') {
            let healedPoints = 0
            if (health + number > 100) {
                healedPoints = 100 - health
            } else {
                healedPoints = number
            }
            health += healedPoints
            console.log(`You healed for ${healedPoints} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (item == 'chest') {
            coins += number
            console.log(`You found ${number} coins.`)
        } else {
            let monsterName = item
            health -= number
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`)
            } else {
                console.log(`You died! Killed by ${monsterName}.`)
                console.log(`Best room: ${room}`)
                isAlive = false
                break
            }
        }
    }
    if (isAlive) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }    
}