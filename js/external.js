// Exter Js
/* 
	# Author Name: 
	# Author URL: 
	# Release Date:
	# License: 

	*/

	// alert("Hello Good Morning Again form External Js");
function add()
{
	var a=20;
	b=10
	let c=a+b

	document.write("The Sum of "+a+ " and "+b+ " is "+c);
}

function addByUser()
{
	var num1, num2;
	num1=parseInt(prompt("Enter the Num1"));
	num2=parseInt(prompt("Enter the Num2"));
	sum=num1+num2;

	document.write("The Sum of "+num1+ " and "+num2+ " is "+sum);
}



function oddEven()
{
	var num1;
	num1=parseInt(prompt("Enter the Number for finding odd/Even? "));

	if(num1%2==0)
	{
		alert("The "+ num1+ " is Even. ");
	}
	else{
		alert("The "+num1+ " is ODD. ")
	}
}

function factrial()
{
	var num, fact=1, i;
	num=parseInt(prompt("Enter the Number for finding Factrial "));
	for(i=1; i<=num; i++)
		{
			fact=fact*i;
		}

		alert("The factrial of "+num+ " is "+ fact);
}


function mulTable()
{
	var num, i;
	num=parseInt(prompt("Enter the Number for Multiplication Table?  "));

	for(i=1; i<=10; i++)
	{
		mul=i*num;

		document.getElementById('mulresult').innerHTML+=num + " x "+i+ " = "+ mul +"<br/>";
	}
}


function validateForm()
{
	var username, password;
	//gettign the valude for form
	username=document.login.username.value;
	password=document.login.password.value;

	if(username=='' && password=='')
	{
		document.getElementById('error').innerHTML="Username and Password requried";
		return false;
	}

	return false;
}
