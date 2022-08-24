function solve(arr) {
    let desiredThickness = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let crystalThickness = arr[i]
        console.log(`Processing chunk ${crystalThickness} microns`)
        while (crystalThickness != desiredThickness) {
            let cut = (number) => number / 4
            let lap = (number) => number - number * 0.2
            let grind = (number) => number - 20
            let etch = (number) => number - 2
            let xray = (number) => number + 1
            let cutCount = 0
            let lapCount = 0
            let grindCount = 0
            let etchCount = 0
            
            while (crystalThickness / 4 >= desiredThickness) {
                crystalThickness = cut(crystalThickness)
                cutCount++
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`)
                console.log('Transporting and washing')
                crystalThickness = Math.floor(crystalThickness)
            }
            
            while (crystalThickness - crystalThickness * 0.2 >= desiredThickness) {
                crystalThickness = lap(crystalThickness)
                lapCount++
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`)
                console.log('Transporting and washing')
                crystalThickness = Math.floor(crystalThickness)
            }
            
            while (crystalThickness - 20 >= desiredThickness) {
                crystalThickness = grind(crystalThickness)
                grindCount++
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`)
                console.log('Transporting and washing')
                crystalThickness = Math.floor(crystalThickness)
            }
            
            while (crystalThickness - 2 >= desiredThickness - 1) {
                crystalThickness = etch(crystalThickness)
                etchCount++
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`)
                console.log('Transporting and washing')
                crystalThickness = Math.floor(crystalThickness)
            }
            
            if (crystalThickness < desiredThickness) {
                crystalThickness = xray(crystalThickness)
                console.log(`X-ray x1`)
            }
        }
        console.log(`Finished crystal ${crystalThickness} microns`)
    }
}