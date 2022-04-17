function display(val)
{
    document.getElementById("result").value+=val;
}
function solve()
{
    let r=eval(document.getElementById("result").value);
    document.getElementById("result").value=r;
}
function clr()
{
    document.getElementById("result").value="";
}