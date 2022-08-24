function solve(arr) {
    let percClean = 0
    function soap(input) {
        return percClean += 10
    }
    function water() {
        return percClean += percClean * 0.2
    }
    function vacuumCleaner() {
        return percClean += percClean * 0.25
    }
    function mud() {
        return percClean -= percClean * 0.1
    }
    function printCar(input) {
        console.log(`The car is ${input.toFixed(2)}% clean.`)
    }
    for (let element of arr) {
        switch (element) {
            case 'soap':
                soap()
                break
            case 'water':
                water()
                break
            case 'vacuum cleaner':
                vacuumCleaner()
                break
            case 'mud':
                mud()
                break
        }
    }
    printCar(percClean)
    
}