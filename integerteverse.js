function reverseInt(n){
    let a =n.toString().split("").reverse().join("");
  
    return parseInt(a) *Math.sign(n);
   
  }
  function check(){
    let s= reverseInt(123);
    console.log(s);
  }
  check();