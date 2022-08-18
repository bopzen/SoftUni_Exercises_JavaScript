function solve(input) {
    let n = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    for (i = 1; i < input.length; i++) {
        if (input[i] < 200) {
            p1 += 1
        } else if (input[i] < 400) {
            p2 += 1
        } else if (input[i] < 600) {
            p3 += 1
        } else if (input[i] < 800) {
            p4 += 1
        } else {
            p5 += 1
        }
    }
    console.log(`${(p1/n*100).toFixed(2)}%`)
    console.log(`${(p2/n*100).toFixed(2)}%`)
    console.log(`${(p3/n*100).toFixed(2)}%`)
    console.log(`${(p4/n*100).toFixed(2)}%`)
    console.log(`${(p5/n*100).toFixed(2)}%`)
}