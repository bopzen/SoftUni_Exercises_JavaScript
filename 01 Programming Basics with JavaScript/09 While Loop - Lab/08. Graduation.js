function solve(input) {
    let name = input[0]
    let year = 1
    let index = 1
    let totalGrades = 0
    let fails = 0
    let isExcluded = false
    while (index <=12) {
        let grade = Number(input[index])
        totalGrades += grade
        if (grade >= 4) {
            year++
        }
        else {
            fails++   
        }
        if (fails == 2) {
            isExcluded = true
            break
        }
        index++
    }
    if (isExcluded) {
        console.log(`${name} has been excluded at ${year} grade`)
    }
    else {
        let averageGrade = totalGrades / 12
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}