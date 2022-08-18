function solve(input) {
    let n = Number(input[0])
    let printLine = ""
    for (i = 1111; i <= 9999; i++) {
        let isSpecial = true
        let number = i.toString()
        for (let ch of number) {
            if (n % Number(ch) != 0) {
                isSpecial = false
                break
            }
        }
        if (isSpecial) {
            printLine += number + " "
        }
    }
    console.log(printLine)
}