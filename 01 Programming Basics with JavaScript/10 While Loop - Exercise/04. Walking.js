function solve(input) {
    let totalSteps = 0
    let i = 0
    let isGoalReached = false
    while (true) {
        if (input[i] == 'Going home') {
            totalSteps += Number(input[i+1])
            if (totalSteps >= 10000) {
                isGoalReached = true
            }
            break
        }
        totalSteps += Number(input[i])
        if (totalSteps >= 10000) {
            isGoalReached = true
            break
        }
        i++
    }
    if (isGoalReached) {
        console.log(`Goal reached! Good job!`)
        console.log(`${totalSteps - 10000} steps over the goal!`)
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`)
    }
}