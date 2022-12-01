// 1)what will console.log state when this function is called?
function myBirthYearFunc(){
   console.log("I was born in " + 1980)
}
// output: I was born in 1980

/*2) if we needed to send a birth year to the function, we would tell the function
"hey, we're gonna send you a variable called birthYearInput." we do that by adding
he variable name into the parentheses. so if the variable birthYearInput is 1980 and
this function is called, what would the console.log state?*/
function myBirthYearFunc(birthYearInput){
    console.log("I was born in "+ birthYearInput)
}
// output: "I was born in 1980"

//if var num1=10 and varnum2=20 what would the console log state?
function add(num1, num2){
    console.log('Summing Numbers!')
    console.log('num1 is: '+ num1)
    console.log('num2 is: '+ num2)
    var sum= num1+num2
    console.log(sum)
}
/*output: Summing Numbers!
          num1 is: 10
          num2 is: 20
          30*/

