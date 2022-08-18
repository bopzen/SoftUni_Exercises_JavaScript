function solve(input) {
    let record = Number(input[0])
    let distance = Number(input[1])
    let speedSecPerMeter = Number(input[2])
    let time = distance * speedSecPerMeter
    let slowDown = Math.floor(distance/15)
    time += slowDown * 12.5
    let difference = record - time
    if (difference > 0) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(-difference).toFixed(2)} seconds slower.`)
    }


}