function solve(arr) {
    let object = {}
    for (let i = 0; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(" | ")
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        object.town = town
        object.latitude = latitude
        object.longitude = longitude
        console.log(object)
    }
    
}