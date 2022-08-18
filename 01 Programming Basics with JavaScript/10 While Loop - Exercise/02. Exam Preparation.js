function solve(input) {
    let threshold = Number(input[0])
    let badGrades = 0
    let goodGrades = 0
    let sumGrades = 0
    let countProblems = 0
    let lastProblem = ''
    let hasFailed = false
    let index = 1
    let command = input[index]
    while (command != 'Enough') {
        lastProblem = command
        let grade = Number(input[index+1])
        if (grade >= 4) {
            goodGrades++
        }
        else {
            badGrades++
        }
        if (badGrades == threshold) {
            hasFailed = true
            break
        }
        sumGrades += grade
        index += 2
        countProblems++
        command = input[index]
    }
    if (hasFailed) {
        console.log(`You need a break, ${badGrades} poor grades.`)
    }
    else {
        let averageScore = sumGrades / (badGrades + goodGrades)
        console.log(`Average score: ${averageScore.toFixed(2)}`)
        console.log(`Number of problems: ${countProblems}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}