function time(num)
 { 
  let hours = Math.floor(num/60);  
  let minutes = num % 60;
  return hours + "h" + minutes;         
}
console.log(time(85));
console.log(time(99));
