//How do we know we need a loop here?
//because we need to establish a condition as the mileage progressses.

//What's the starting point of the loop?
// mile 0

//When should the loop stop?
//mile 6

//How will it know to stop?
//The loop would have met our criteria.

//What's the incrementing for each iteration of the loop?
//+1

//What variables do we need?
//miles ran and available candy.



// function candyRunner(miles){
//     var givenCandy = 0
//     for (var milesRan = 1; milesRan < miles; milesRan++) {
//         if (milesRan % 2 === 0) {
//             givenCandy++
//         } else {
//             givenCandy = 0
//         }
//         console.log(milesRan, givenCandy)
//     }
//     console.log(milesRan, givenCandy)
// }
// candyRunner(10)
function candyRunner(miles) {
    var givenCandy = 0
    for (var milesRan = 2; milesRan < miles; milesRan += 2) {

        givenCandy++

        console.log(milesRan, givenCandy)

    }
    console.log(milesRan, givenCandy)
}
candyRunner(10)
