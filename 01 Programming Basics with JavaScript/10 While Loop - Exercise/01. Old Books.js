function solve(input) {
    let book = input[0]
    let index = 1
    let isFound = false
    while (input[index] != 'No More Books') {
        let currentBook = input[index]
        if (currentBook == book) {
            isFound = true
            break
        }
        index++
    }
    if (isFound) {
        console.log(`You checked ${index-1} books and found it.`)
    }
    else {
        console.log('The book you search is not here!')
        console.log(`You checked ${index-1} books.`)
    }
}