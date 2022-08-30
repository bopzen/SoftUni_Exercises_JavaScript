function solve(stockArr, orderedArr) {
    class Product {
        constructor(name, quantity) {
            this.name = name
            this.quantity = quantity
        }
        add(addQuantity) {
            return this.quantity += addQuantity
        }
    }
    let stockProducts = []
    for (let i = 0; i < stockArr.length; i += 2) {
        stockProducts.push(new Product(stockArr[i], Number(stockArr[i+1])))
    }
    for (let i = 0; i < orderedArr.length; i += 2) {
        let isFound = false
        for (let product of stockProducts) {
            if (product.name == orderedArr[i]) {
                product.add(Number(orderedArr[i+1]))
                isFound = true
                break
            }
        }
        if (!isFound) {
            stockProducts.push(new Product(orderedArr[i], Number(orderedArr[i+1])))
        }
    }
    for (let element of stockProducts) {
        console.log(`${element.name} -> ${element.quantity}`)
    }
}