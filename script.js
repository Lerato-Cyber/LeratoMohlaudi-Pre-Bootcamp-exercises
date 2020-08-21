//Task 1

var y = 1;
var x = 0;
x = x + 3;
y = y + x;
console.log(x);
console.log(y);

//Task 2

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + ( 1 * 2 );
var a = 1 + 1 * 2 / 2;
var b = (1 + 1 * 2 ) /  2;
 console.log(x);
 console.log(y);
 console.log(z);
 console.log(a);
 console.log(b);


//Task 3

let number = 65;
if (number >= 65){console.log (true);}
else if (number <65) {console.log (false);}


// Task 4
/*Write a function that takes 2 numbers as input.
 If either of the numbers is 3 AND the sum of the numbers 
 contains a 3 then return true. Otherwise return false*/

 const see = (x,y) => x === 3 || y === 3 || (x + y) ===3;

console.log(see(9,9));
console.log(see(1,2));




 //Task 10
 /* Write a function that takes in a string and 
 then prints out all the vowels in the string. Make
  sure it can deal with capital letters and small 
  letters.*/

  function wordcheck(str) {
  var vowel = 'aeiouAEIOU'
  var vowelcheck = 0;
  
  for (var i = 0; i < str.length ; i++)
  {if (vowel.indexOf(str[i]) !== -1)
   {
      vowelcheck += 1;
   }

  }
  return vowelcheck;
}
console.log(wordcheck("Ayanda"));
