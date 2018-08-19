function anagram(stringA,stringB)
{
  return cleanString(stringA)==cleanString(stringB);
}
function cleanString(str)
{
  return str.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("");
}
function check()
{
  const s=anagram("hello","shello");
  if(s){
    console.log("anagram");
}

else{
  console.log("not anagram");
}
}
check();