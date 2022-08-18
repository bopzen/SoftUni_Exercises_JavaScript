function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let accomodation = '';
    let destination = '';
    let price = 0;
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            accomodation = 'Camp';
            price = budget * 0.3;
        } else if (season == 'winter') {
            accomodation = 'Hotel';
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            accomodation = 'Camp';
            price = budget * 0.4;
        } else if (season == 'winter') {
            accomodation = 'Hotel';
            price = budget * 0.8;
        }
    } else {
        destination = 'Europe';
        accomodation = 'Hotel';
        price = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${price.toFixed(2)}`);
}