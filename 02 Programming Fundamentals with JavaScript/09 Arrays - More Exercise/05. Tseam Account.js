function solve(arr) {
    let games = arr[0].split(" ")
    let index = 1
    while (arr[index] != 'Play!') {
        let command = arr[index].split(" ")
        let action = command[0]
        let game = command[1]
        if (action == 'Install' && !games.includes(game)) {
            games.push(game)
        } else if (action == 'Uninstall' && games.includes(game)) {
            games.splice(games.indexOf(game),1)
        } else if (action == 'Update' && games.includes(game)) {
            games.splice(games.indexOf(game),1)
            games.push(game)
        } else if (action == 'Expansion') {
            let gameExpansion = game.split("-")
            let gameExp = gameExpansion[0]
            let exp = gameExpansion[1]
            let gameExpStr = gameExp + ":" + exp
            if (games.includes(gameExp)) {
                games.splice(games.indexOf(gameExp)+1, 0, gameExpStr)
            }
        }
        index++
    }
    console.log(games.join(" "))
}