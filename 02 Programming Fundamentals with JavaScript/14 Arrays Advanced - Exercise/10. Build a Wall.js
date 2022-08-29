function solve(arr) {
    let crew = arr.filter(x => x != 30).length
    let days = 0
    let concretePerDay = []
    while (crew > 0) {
        days++
        let dailyConcrete = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <=29) {
                arr[i]++
                if (arr[i] == 30) {
                    crew--
                }
                dailyConcrete += 195
            }
        }
        concretePerDay.push(dailyConcrete)
    }
    console.log(concretePerDay.join(", "))
    let sumPesos = 0
    for (let el of concretePerDay) {
        sumPesos += el * 1900
    }
    console.log(`${sumPesos} pesos`)
}
