//example1
function fun()
{
    console.log("Function sample example")
}
fun()

function fun(a,b)
{
      
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("Number is even",i)
        }
        else
        {
            console.log("The number is odd",i)
        }
    }
}
fun(5,10)