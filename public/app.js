function clickme()
	{
		
		var x = window.localStorage.getItem('eee')*1;
		x++;
		window.localStorage.setItem('eee', x)
		alert(x);
	}

function add_to_cart(id)
	{
		var key = 'product_' + id;
		var x = window.localStorage.getItem(key)*1;
		x++;
		window.localStorage.setItem(key, x);
		alert(x);
	}

function remove_from_cart(id)
	{
		var key = 'product_' + id;
		window.localStorage.removeItem(key);
	}

function total_sc()
{
	var total = 0;
	for (var i = 0; i < localStorage.length; i++) {
			total += localStorage.getItem(window.localStorage.key(i))*1;
		}
	document.getElementById("total").innerHTML = total;
}
