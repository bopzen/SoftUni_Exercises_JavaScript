function solve(arr) {
    let dictionary = []
    for (let element of arr) {
        let currentObject = JSON.parse(element)
        let term = Object.keys(currentObject)
        let definition = Object.values(currentObject)
        let obj = {
            Term: term[0],
            Definition: definition[0]
        }
        let isFound = false
        for (let el of dictionary) {
            if(el.Term == term) {
                el.Definition = definition
                isFound = true
                break
            }
        }
        if (!isFound) {
            dictionary.push(obj)
        }
  
        }

    let sortedDictinoary = dictionary.sort((a,b) => a.Term.localeCompare(b.Term))
    for (let el of sortedDictinoary) {
        console.log(`Term: ${el.Term} => Definition: ${el.Definition}`)
    }

}