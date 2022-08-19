function solve(input) {
   let username = input[0]
   let password = ''
   for (let i = username.length-1; i >= 0; i--) {
       password += username[i]
   }
   let countIncorrect = 0
   let isBlocked = false
   let index = 1
   let currentPassword = input[index]
   while (currentPassword != password) {
       countIncorrect++
       if (countIncorrect == 4) {
           isBlocked = true
           break
       }
       console.log('Incorrect password. Try again.')
       index++
       currentPassword = input[index]
       
   }
   if (isBlocked) {
       console.log(`User ${username} blocked!`)
   } else {
       console.log(`User ${username} logged in.`)
   }
   
}