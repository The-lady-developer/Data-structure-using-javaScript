// anagram is like hello=olehl (anagram). if it's like hello=lohels (not anagram)

function anagram(stringA,stringB)
{
  const acharMap=buildCharMap(stringA);
  const bcharMap=buildCharMap(stringB);
  if(Object.keys(acharMap).length!=Object.keys(bcharMap).length)
  {
    return false;
  }
  for(let char in acharMap)
  {
    if(acharMap[char]!=bcharMap[char])
    {
      return false;
    }
  }
  return true;
}
function buildCharMap(str)
{
  const charMap={};
  for(let char of str.replace(/[^\w]/g,"").toLowerCase()){
    charMap[char]=charMap[char]+1 ||1;
      }
      console.log(charMap);
      return charMap;
}
function check()
{
  let c = anagram("hello","llehos");
  if(c)
  {
    console.log("anagram");
  }
  else{
    console.log("not anagram");
  }
}
check();