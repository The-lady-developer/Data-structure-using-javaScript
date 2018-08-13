//The every() method checks if all elements in an array pass a test (provided as a function).
//The every() method executes the function once for each element present in the array:
//If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
//If no false occur, every() returns true.
    


function reverse(a){
    let b = a.split("").every((Char,i)=>   
{
    return char==a[a.length-i-1]
});
if(b){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
}
reverse("manvi");