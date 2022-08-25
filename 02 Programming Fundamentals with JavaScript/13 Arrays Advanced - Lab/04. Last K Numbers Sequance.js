function solve(n, k) {
    let sequence = []
    sequence.push(1)
    for (let i = 1; i < n; i++) {
        let index = i - 1
        let endIndex = i-k
        if (endIndex < 0)
            endIndex = 0
        let sum = 0
        while (index >= endIndex) {
            sum += sequence[index]
            index--
        }
        sequence.push(sum)
        
    }
    console.log(sequence.join(" "))
}