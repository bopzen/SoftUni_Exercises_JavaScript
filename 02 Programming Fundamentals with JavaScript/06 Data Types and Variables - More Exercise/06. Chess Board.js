function solve(n) {
    console.log('<div class="chessboard">')
    let isBlack = true
    for (let i = 1; i <= n; i++) {
        console.log('  <div>')
        for (let j = 1; j <= n; j++) {      
            if (isBlack) {
                console.log('    <span class="black"></span>')
                isBlack = !isBlack
            } else {
                console.log('    <span class="white"></span>')
                isBlack = !isBlack
            }
        }
        console.log('  </div>')
        if (n % 2 ==0)
            isBlack = !isBlack
    }
    console.log('</div>')
}