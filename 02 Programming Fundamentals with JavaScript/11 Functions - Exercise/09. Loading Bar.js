function solve(number) {
    let bar = "["
    if (number / 10 == 10) {
        console.log('100% Complete!')
        console.log('[%%%%%%%%%%]')
    } else {
        for (let i=1; i <= number / 10; i++) {
            bar += '%'
        }
        for (let i=1; i <= 10 - number / 10; i++) {
            bar += '.'
        }
        bar += ']'
        console.log(`${number}% ${bar}`)
        console.log('Still loading...')
    }   
}