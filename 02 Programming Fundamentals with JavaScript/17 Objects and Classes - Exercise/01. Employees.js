function solve(arr) {
    class Employee {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName
            this.personalNum = personalNum
        }
    }
    let employees = []
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i]
        let personalNumber = arr[i].length
        employees.push(new Employee(name, personalNumber))
    }
    for (let employee of employees) {
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`)
    }
    
}