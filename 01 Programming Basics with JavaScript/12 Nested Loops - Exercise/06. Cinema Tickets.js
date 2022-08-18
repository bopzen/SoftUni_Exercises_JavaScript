function solve(input) {
    let index = 0
    let movieTickets = 0
    let allTickets = 0
    let studentTickets = 0
    let standardTickets = 0
    let kidsTickets = 0
    while (true) {
        let movie = input[index]
        if (movie == 'Finish') {
            break
        }
        index++
        let seats = Number(input[index])
        index++
        movieTickets = 0
        while (true) {
            let ticketType = input[index]
            if (ticketType == 'End') {
                break
            }
            movieTickets++
            allTickets++
            if (ticketType == 'student') {
                studentTickets++
            } else if (ticketType == 'standard') {
                standardTickets++
            } else if (ticketType == 'kid') {
                kidsTickets++
            }
            if (movieTickets == seats) {
                break
            }
            index++
        }
        console.log(`${movie} - ${(movieTickets/seats*100).toFixed(2)}% full.`)
        index++
        
    }
    console.log(`Total tickets: ${allTickets}`)
    console.log(`${(studentTickets/allTickets*100).toFixed(2)}% student tickets.`)
    console.log(`${(standardTickets/allTickets*100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidsTickets/allTickets*100).toFixed(2)}% kids tickets.`)
}