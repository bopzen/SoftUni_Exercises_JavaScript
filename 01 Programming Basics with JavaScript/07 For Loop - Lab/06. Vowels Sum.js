function solve(input) {
    let text = input[0]
    let totalSum = 0
    for (let ch of text) {
        switch (ch) {
            case 'a':
                totalSum += 1
                break
            case 'e':
                totalSum += 2
                break
            case 'i':
                totalSum += 3
                break
            case 'o':
                totalSum += 4
                break
            case 'u':
                totalSum += 5
                break
        }
    }
    console.log(totalSum)

}