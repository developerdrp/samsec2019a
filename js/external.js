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
	else if(username=='')
	{
		document.getElementById('error').innerHTML="Username is requried";
		return false;

	}

	else if(password=='')
	{
		document.getElementById('error').innerHTML="Password is requried";
		return false;
	}
	else if(username.length<5 && password.length<5)
	{
		document.getElementById('error').innerHTML="Username and Password should minimum 5 characters";
		return false;
	}
	else if(username=='admin' && password=='admin')
	{
		document.getElementById('error').innerHTML="Password Match";
		return false;
	}
	else
	{
		document.getElementById('error').innerHTML="Unexpected Error Occur";
		return false;
	}
	return false;
}


function currentDate()
{
	var day, date, month, year;
	//d object of Date Class
	 d= new Date();

	 day=d.getDay(); // 0-6
	 date=d.getDate(); //1-31
	 month=d.getMonth(); //0-11
	 year=d.getFullYear(); // YYYY

	if(day==0) day="Sunday";
	else if(day==1) day="Monday";
	else if(day==2) day="Tuesday";
	else if(day==3) day="Wednesday";
	else if(day==4) day="Thursday";
	else if(day==5) day="Friday";
	else day="Saturday";

	if(month==0) month="Januray";
	else if(month==1) month="February";
	else if(month==2) month="March";
	else if(month==3) month="April";
	else if(month==4) month="May";
	else if(month==5) month="June";
	else if(month==6) month="July";
	else if(month==7) month="August";
	else if(month==8) month="September";
	else if(month==9) month="October";
	else if(month==10) month="November";
	else  month="December";

	document.getElementById('currentDate').innerHTML=day + ", "+date+" "+month+ " "+year;
	//Calling the refreshTime 
	refreshTime();
}

function currentTime()
{
	var hh, mm, ss, ampm;
	t=new Date();
	hh=t.getHours();//0-23
	mm=t.getMinutes();
	ss=t.getSeconds();
	ampm=hh<=11?"AM":"PM";
	document.getElementById('hh').innerHTML=hh;
	document.getElementById('mm').innerHTML=mm;
	document.getElementById('ss').innerHTML=ss +" "+ampm;
}

function refreshTime()
{
	setInterval(currentTime, 1000);
}
