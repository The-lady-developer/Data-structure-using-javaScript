function capatalize(str)
{
  const words=[];
  for(let word of str.split(" "))
  {
words.push(word[0].toUpperCase()+word.slice(1));
  }
  return words.join(" ");
}
function check()
{
  let a = capatalize("hey there i am");
  console.log(a);
}
check();