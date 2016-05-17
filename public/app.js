function clickme()
	{
		
		var x = window.localStorage.getItem('eee')*1;
		x++;
		window.localStorage.setItem('eee', x)
		alert(x);
	}

function add_to_cart(id)
{
	var x = window.localStorage.getItem('product_' + id)*1;
	x++;
	window.localStorage.setItem('product_' + id, x);
	alert(x);
}
function remove_from_cart(id)
{
	window.localStorage.removeItem('product_' + id);
}