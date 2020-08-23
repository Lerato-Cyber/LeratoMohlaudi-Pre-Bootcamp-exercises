function cToF(celcius) {
    let fahrenheit = (celcius * 9/5) + 32;
   return fahrenheit;
 }

 console.log(cToF(10))

 function fToC(fahrenheit){
    let celcius = (fahrenheit -32)*5/9;
    return celcius;
}
console.log(fToC(50))