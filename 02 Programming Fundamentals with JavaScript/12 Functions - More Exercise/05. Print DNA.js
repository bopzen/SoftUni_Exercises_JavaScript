function solve(n) {
    let DNA = 'ATCGTTAGGG'
    let DNAcounter = 0
    let dots = 2
    let hyphens = 0
    let rowString = ''
    let counter = 0
    for (let row = 1; row <= n; row++) {
        if (DNAcounter == 10)
            DNAcounter = 0
        rowString = '*'.repeat(dots) + DNA[DNAcounter] + '-'.repeat(hyphens) + DNA[DNAcounter+1] + '*'.repeat(dots)
        console.log(rowString)
        DNAcounter += 2
        if (counter == 2) {
            counter = -2
        }
        if (counter >= 0) {
            dots--
            hyphens +=2
        } else {
            dots++
            hyphens -=2
        }
        counter++
    }
}