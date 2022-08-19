function solve(text1, char, text2) {
    let result = text1.replace('_', char)
    let output = result === text2 
        ? 'Matched'
        : 'Not Matched'
    console.log(output)
}