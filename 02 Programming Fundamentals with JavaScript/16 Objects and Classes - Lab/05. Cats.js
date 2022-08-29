function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats = []
    for (let i = 0; i < arr.length; i++) {
        let cat = arr[i].split(" ")
        cats.push(new Cat(cat[0], cat[1]))
    }
    for (let el of cats) {
        el.meow()
    }    
    
}