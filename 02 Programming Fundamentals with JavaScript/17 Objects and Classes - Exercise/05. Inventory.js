function solve(arr) {
    let heroes = []
    for (let element of arr) {
        let [name, level, items] = element.split(" / ")
        let currentHero = {
                        name: name,
                        level: +level,
                        items: items
                        }
        heroes.push(currentHero)
    }
    let sortedByLevel = heroes.sort((a,b) => a.level-b.level)
    for (let el of sortedByLevel) {
        console.log(`Hero: ${el.name}`)
        console.log(`level => ${el.level}`)
        console.log(`items => ${el.items}`)
    }

}