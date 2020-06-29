function fizzBuzz(num) {
/* 
if the number is divisible by 3 and 5, then return "FizzBuzz"
If the number is divisible by 3, then return "Fizz"
If the number is divisible by 5, then return "Buzz"
Else just return the number 
*/   
    if ( typeof(num) != "number") { return "Error!"};
    
    let remain3r = num % 3;
    let remain5r = num % 5;

    if ( remain3r == 0 && remain5r == 0 ) { return "FizzBuzz" ; }
    else if ( remain3r == 0 ) { return "Fizz" ;}
    else if ( remain5r == 0 ) { return "Buzz" ;}
    else {return num;}

}