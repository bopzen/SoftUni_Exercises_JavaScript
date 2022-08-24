function solve(arr) {
    function checkCoords(x1,y1,x2,y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        if (distance % 1 == 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
    checkCoords(arr[0],arr[1],0,0)
    checkCoords(arr[2],arr[3],0,0)
    checkCoords(arr[0],arr[1],arr[2],arr[3])
}