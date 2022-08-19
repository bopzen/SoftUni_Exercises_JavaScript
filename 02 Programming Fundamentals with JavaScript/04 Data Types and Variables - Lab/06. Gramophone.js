function solve(band, album, song) {
    let songLength = (album.length * band.length) * song.length / 2
    let rotations = songLength / 2.5
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}