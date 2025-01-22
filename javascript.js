window.onload(setTimeout(function(){showresult()});
function showresult(choice)
{
		var n1= document.getElementById('num1').value;
		var n2= document.getElementById('num2').value;
		
		if(n1 == '')
		{
			alert("First number is required");
		}
		else if(n2 == '')
		{
			alert("Second number is required");
		}
		else
		{
			var number_1 = parseFloat(n1);
			var number_2 = parseFloat(n2);
			var r;
			var Operator = choice;

			switch(Operator)
			{
				case '+':
					r = number_1+number_2;
					break;
				case '-':
					r = number_1-number_2;
					break;
				case '*':
					r = number_1*number_2;
					break;
				case '/': 
					r = number_1/number_2;
					break;
				case '%':
					r = number_1%number_2;
					break;
				default:
					break;
			}
			document.getElementById('result').value = r;
		}
}
function Clear()
{
	document.getElementById('result').value=''; 
	document.getElementById('num1').value=''; 
	document.getElementById('num2').value=''; 
}