let a=document.getElementById("value");
let number=Math.ceil(Math.random()*100);
let result=document.getElementById("result");
function check()
{
    let b=parseInt(a.value);
    if(b>number)
    {
        result.textContent="Too high! Try Again";
        result.style.backgroundColor="#0a5bf2";
        result.style.border="black solid 1px";
    }
    else if(b<number)
    {
        result.textContent="Too Low! Try Again";
        result.style.backgroundColor="#b00af2";
        result.style.border="black solid 1px";
    }
    else if(b==number)
    {
        result.textContent="Congratulations!!! Your Guess is Right";
        result.style.backgroundColor="#05fa22";
        result.style.border="black solid 1px";
    }
    else{
        result.textContent="Invalid Input! Enter a number";
        result.style.backgroundColor="red";
        result.style.border="black solid 1px";
    }
}












