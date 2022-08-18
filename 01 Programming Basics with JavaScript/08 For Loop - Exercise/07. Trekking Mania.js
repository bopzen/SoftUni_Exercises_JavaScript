function solve(input) {
    let countGroups = Number(input[0])
    let total = 0
    let Musala = 0
    let Montblan = 0
    let Kilimandjaro = 0
    let K2 = 0
    let Everest = 0
    for (i = 1; i < input.length; i++) {
        let group = Number(input[i])
        total += group
        if (group <=5) {
            Musala += group
        }
        else if (group <= 12) {
            Montblan += group
        }
        else if (group <= 25) {
            Kilimandjaro += group
        }
        else if (group <= 40) {
            K2 += group
        }
        else if (group > 40) {
            Everest += group
        }
    }
    console.log(`${(Musala/total*100).toFixed(2)}%`)
    console.log(`${(Montblan/total*100).toFixed(2)}%`)
    console.log(`${(Kilimandjaro/total*100).toFixed(2)}%`)
    console.log(`${(K2/total*100).toFixed(2)}%`)
    console.log(`${(Everest/total*100).toFixed(2)}%`)
}