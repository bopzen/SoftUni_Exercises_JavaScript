function solve(arr) {
    let items = arr[0].split(" ")
    for (let index = 1; index < arr.length; index++) {
        let command = arr[index].split(" ")
        let action = command[0]
        let item = command[1]
        if (action == 'Buy') {
            if (!items.includes(item)) {
                items.push(item)
            }
        } else if (action == 'Trash') {
            if (items.includes(item)) {
                items.splice(items.indexOf(item),1)
            }
        } else if (action == 'Repair') {
            if (items.includes(item)) {
                items.splice(items.indexOf(item),1)
                items.push(item)
            }
        } else if (action == 'Upgrade') {
            let upgradedItem = item.split("-")
            let itemStr = upgradedItem[0] + ":" + upgradedItem[1]
            if (items.includes(upgradedItem[0])) {
                items.splice(items.indexOf(upgradedItem[0])+1,0, itemStr)
            }
        }
    }
    console.log(items.join(" "))
}
