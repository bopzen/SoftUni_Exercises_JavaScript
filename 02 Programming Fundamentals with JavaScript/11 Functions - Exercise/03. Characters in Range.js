function solve(char1, char2) {
    let char1Code = char1.charCodeAt(0)
    let char2Code = char2.charCodeAt(0)
    let printLine = ''
    if (char1Code < char2Code) {
        for (let i = char1Code + 1; i < char2Code; i++) {
            let char = String.fromCodePoint(i)
            printLine += char + " "
        }
    } else {
        for (let i = char2Code + 1; i < char1Code; i++) {
            let char = String.fromCodePoint(i)
            printLine += char + " "
        }
    }
    console.log(printLine)
}