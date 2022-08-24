function solve(password) {
    
    function validLength(pass) {
        return pass.length >= 6 && pass.length <= 10
    }
    function validChars(pass) {
        let isValid = true
        for (let ch of pass) {
            let chNum = ch.charCodeAt(0)
            let validChars = (chNum >= 48 && chNum <= 57) || (chNum >= 65 && chNum <= 90) || (chNum >= 97 && chNum <= 122)
            if (!validChars) {
                isValid = false
                break
            }
        }
        return isValid
    }
    
    function validDigits(pass) {
        let count = 0
        let isValid = false
        for (let ch of pass) {
            let chNum = ch.charCodeAt(0)
            if (chNum >= 48 && chNum <= 57) {
                count++
            }
            if (count == 2) {
                isValid = true
                break
            }
        }
        return isValid
    }
    if (!validLength(password)) {
        console.log("Password must be between 6 and 10 characters")
    }
    if (!validChars(password)) {
        console.log("Password must consist only of letters and digits")
    }
    if (!validDigits(password)) {
        console.log("Password must have at least 2 digits")
    }
    if (validLength(password) && validChars(password) && validDigits(password)) {
        console.log("Password is valid")
    }
    
}