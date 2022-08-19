function solve(base, increment) {
   let stone = 0
   let marble = 0
   let lapisLazuli = 0
   let gold = 0
   let height = 0
   let baseArea = 0
   let innerBaseArea = 0
   let outerBaseArea = 0
   let floor = 0
   while (base >=1) {
       floor++
       if (base == 1 || base == 2) {
           gold += base * base * increment
       } else {
           baseArea = base * base
           innerBaseArea = (base - 2) * (base -2)
           outerBaseArea = baseArea - innerBaseArea
           stone += innerBaseArea * increment
           if (floor % 5 == 0) {
               lapisLazuli += outerBaseArea * increment
           } else {
               marble += outerBaseArea * increment
           }
       }
       base -=2
   }
   height = floor * increment
   console.log(`Stone required: ${Math.ceil(stone)}`)
   console.log(`Marble required: ${Math.ceil(marble)}`)
   console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
   console.log(`Gold required: ${Math.ceil(gold)}`)
   console.log(`Final pyramid height: ${Math.floor(Math.floor(height))}`)
}