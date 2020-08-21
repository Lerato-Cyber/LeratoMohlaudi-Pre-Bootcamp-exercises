
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

