if (window.localStorage.getItem('dd') == nill) { window.localStorage.setItem('dd', 0)}
function clickme()
	{
		
		var x = window.localStorage.getItem('dd');
		x++;
		alert(x);
		window.localStorage.setItem('dd', x)
	}
