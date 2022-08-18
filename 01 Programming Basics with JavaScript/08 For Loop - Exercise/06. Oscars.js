function solve(input) {
    let actor = input[0]
    let academyPoints = Number(input[1])
    let countJury = Number(input[2])
    let isNominated = false
    for (i = 3; i < input.length; i += 2) {
        let juryName = input[i]
        let juryPoints = Number(input[i+1])
        academyPoints += juryName.length * juryPoints / 2 
        if (academyPoints >= 1250.5) {
            isNominated = true
            break
        }
    }
    if (isNominated) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
    }
    else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
    }
}