function solve(arr, details) {
    arr = arr.splice(0, details[0])
    arr.splice(0,details[1])
    arr = arr.filter(x => x == details[2])
    console.log(`Number ${details[2]} occurs ${arr.length} times.`)
}