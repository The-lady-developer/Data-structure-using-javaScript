function fizzBuzz (n){
    for (let i=0; i<=n; i++){
        if(i%3==0 && i%5==0){
            console.log("fizBuzz");
        }
        else if(i%5==0){
            console.log("Buzz");
                }
                else if(i%3==0){
                    console.log("fizz");
                }
                else{
                    console.log("wrong input");
                }
    }
}
function check()
{
    fizzBuzz(15);
}
check();