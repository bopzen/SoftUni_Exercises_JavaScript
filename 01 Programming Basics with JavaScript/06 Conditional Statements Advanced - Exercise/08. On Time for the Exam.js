function solve(input) {
    let hourExam = Number(input[0])
    let minuteExam = Number(input[1])
    let hourArrival = Number(input[2])
    let minuteArrival = Number(input[3])
    let timeExam = hourExam * 60 + minuteExam
    let timeArrival = hourArrival * 60 + minuteArrival
    let timeDifference = timeArrival - timeExam
    let studentArrival = ''
    let result = ''
    if (timeDifference < -30) {
        studentArrival = 'Early'
    } else if (timeDifference <= 0) {
        studentArrival = 'On Time'
    } else {
        studentArrival = 'Late'
    }
    if (timeDifference != 0) {
        let hoursDifference = Math.floor(Math.abs(timeDifference) / 60)
        let minutesDifference = Math.abs(timeDifference) % 60
        if (hoursDifference > 0) {
            if (minutesDifference < 10) {
                result = `${hoursDifference}:0${minutesDifference} hours`
            } else {
                result = `${hoursDifference}:${minutesDifference} hours`
            }
        } else {
            result = `${minutesDifference} minutes`
        }
        if (timeDifference < 0) {
            result += ' before the start'
        } else {
            result += ' after the start'
        }
    }
    console.log(studentArrival)
    console.log(result)
}