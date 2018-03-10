function firstContent()
	{
		x=document.getElementById("demo");
		x.innerHTML="Able was I ere I saw Elba.";
	}
function changeContent()
	{
		x=document.getElementById("demo");
		x.innerHTML="Elba saw I ere I was Able";
	}
function changeStyle()
	{
	x=document.getElementById("intro1");
	y=document.getElementById("intro2");
	x.style.color="coral";
	x.style.fontSize="20px";
	y.style.color="khaki";
	y.style.fontSize="14px";
	}
function changeImage()
	{
	element=document.getElementById("myimage")
	if(element.src.match("bllubon"))
	{
		element.src="images/blluboff.gif";
	}
	else
	{
		element.src="images/bllubon.gif";
		}
	}	
function checkFun()
	{
	var x=document.getElementById("txtbox1").value;
	if(x==""||isNaN(x))         //isNaN() isdigit
	{
		alert("That's not a number");
	}
	else
        {
                alert("The input result is"+x);
        }
}
