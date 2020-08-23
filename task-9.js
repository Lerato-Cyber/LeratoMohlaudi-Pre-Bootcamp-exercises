let multiple = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       multiple += x;
    }
}
console.log(multiple);