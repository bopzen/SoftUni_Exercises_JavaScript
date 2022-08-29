function solve(json) {
    let object = JSON.parse(json)
    for (let key of Object.keys(object)) {
        console.log(`${key}: ${object[key]}`)
    }
}