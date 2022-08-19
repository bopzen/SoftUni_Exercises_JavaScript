function solve(n) {
    n = Number(n)
    for (let a = 97; a < (97 + n); a++) {
        for (let b = 97; b < (97 + n); b++) {
            for (let c = 97; c < (97 + n); c++) {
                console.log(`${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)}`)
            }
        }
    }
}