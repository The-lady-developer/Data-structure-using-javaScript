//nitin=nitin (same from both sides.)

//we just need to compare from both the sides

function reverse(a)
{
    let b = a.split("").reverse().join("");
    return b==a;
}
function check() //truthy falsy condition
{
    if(reverse("manvi")){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
}
check();