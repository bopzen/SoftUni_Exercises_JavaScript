function solve(input) {
    let countTournaments = Number(input[0])
    let startPoints = Number(input[1])
    let wonPoints = 0
    let averagePoints = 0
    let percentWonTournaments = 0
    let countWins = 0
    for (i = 2; i < input.length; i++)
        if (input[i] == 'W') {
            wonPoints += 2000
            countWins ++
        }
        else if (input[i] == 'F') {
            wonPoints += 1200
        }
        else if (input[i] == 'SF') {
            wonPoints += 720
        }
    console.log(`Final points: ${startPoints + wonPoints}`)
    averagePoints = Math.floor(wonPoints / countTournaments)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${(countWins/countTournaments*100).toFixed(2)}%`)
}