function solve(sequence, bomb) {
    let bombNumber = bomb[0]
    let bombPower = bomb[1]
    for (let i = 0; i < sequence.length; i++) {
        let startIndex = 0
        let endIndex = 0
        if (sequence[i] == bombNumber) {
            startIndex = i - bombPower
            endIndex = i + bombPower
            if (startIndex < 0) {
                startIndex = 0
            }
            if (endIndex >= sequence.length) {
                endIndex = sequence.length - 1
            }
        
            for (let j = startIndex; j <= endIndex; j++) {
                sequence[j] = 'bombed'
            }
        }
    }
    sequence = sequence.filter(x => x != 'bombed')
    let sum = 0
    for (let el of sequence) {
        sum += el
    }
    console.log(sum)
}