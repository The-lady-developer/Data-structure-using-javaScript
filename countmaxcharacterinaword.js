const string= "hello there";
const chars={};
let max =0;
let charMax;
for (let char of string)
{
  chars[char]=chars[char]+1 || 1;
}
  console.log(chars);
 
for (let char in chars)
{
if(chars[char]>max)
{
  max=chars[char];
  charMax=char;
}
}
console.log(`max value is ${this.max} and max char is ${this.charMax}`);
console.log(max);
console.log(charMax);