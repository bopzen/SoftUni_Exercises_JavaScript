function solve(input) {
    let command = input[0];
    let index = 0
    while (true) {
        let command = input[index];
        index ++;
        if (command === 'Stop') {
            break;
        }
        console.log(command)
    }
    
}