function clickme()
	{
		
		var x = window.localStorage.getItem('eee')*1;
		x++;
		window.localStorage.setItem('eee', x)
		alert(x);
	}

function add_to_cart()
{
	alert('Pizza adder from card')
}