function solve(input) {
    let jury = Number(input[0])
    let topic = input[1]
    let index = 1
    let sumGrade = 0
    let sumTopicGrade = 0
    let counter = 0
    while (topic != 'Finish') {
        index++
        for (i=1; i <= jury; i++) {
            sumTopicGrade += Number(input[index])
            sumGrade += Number(input[index])
            index++
            counter++
        }
        let avgTopicGrade = sumTopicGrade / jury
        console.log(`${topic} - ${avgTopicGrade.toFixed(2)}.`)
        sumTopicGrade = 0

        topic = input[index]
    }
    let avgGrade = sumGrade / counter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}