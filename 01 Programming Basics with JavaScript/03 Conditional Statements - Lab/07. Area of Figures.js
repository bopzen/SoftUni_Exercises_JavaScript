function solve(input) {
    let figure = input[0];
    let area = 0;
    if (figure === 'square') {
        let side = Number(input[1]);
        area = side * side
    } else if (figure === 'rectangle') {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB 
    } else if (figure === 'circle') {
        let radius = Number(input[1])
        area = Math.PI * radius ** 2;
    } else if (figure === 'triangle') {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = side * height / 2;
    }
    console.log(area.toFixed(3));

}