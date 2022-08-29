function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    let songs = []
    let countSongs = arr.shift()
    let playList = arr.pop()
    for (let i = 0; i < arr.length; i++) {
        let [type, name, time] = arr[i].split("_")
        songs.push(new Song(type, name, time))
    }
    for (let song of songs) {
        if (playList == 'all') {
            console.log(song.name)
        } else if (song.typeList == playList) {
            console.log(song.name)
        }
    }
}