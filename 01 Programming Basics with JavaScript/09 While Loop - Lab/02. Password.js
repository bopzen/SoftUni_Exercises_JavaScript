function solve(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    while (true) {
        let tryPassword = input[index];
        index ++
        if (tryPassword === password) {
            console.log(`Welcome ${username}!`);
            break;
        } 
    }
    
}