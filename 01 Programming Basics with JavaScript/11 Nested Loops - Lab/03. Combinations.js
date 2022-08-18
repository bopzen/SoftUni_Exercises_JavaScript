function solve(input) {
    let n = Number(input[0])
    let counter = 0
    for (x = 0; x <= n; x++) {
        for (y = 0; y <= n; y++) {
            for (z = 0; z <= n; z++) {
                if (x + y + z == n) {
                    counter++
                }
            }
        }
    }
    console.log(counter)
}