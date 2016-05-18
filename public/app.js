function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function add_to_cart(id)
	{
		var key = 'product_' + id;
		var x = window.localStorage.getItem(key)*1;
		x++;
		window.localStorage.setItem(key, x);
		
		update_orders_input();
	}

function remove_from_cart(id)
	{
		var key = 'product_' + id;
		window.localStorage.removeItem(key);

		update_orders_input();
	}

function total_sc()
{
	var total = 0;
	for (var i = 0; i < localStorage.length; i++) {
		var value = window.localStorage.key(i);
		//Check key='product_'?
		if (value.indexOf('product_') == 0) {
			total += localStorage.getItem(value)*1;
		}
	}
	document.getElementById("total").innerHTML = total;
}

function cart_get_orders()
{
	var orders = '';
	for (var i = 0; i < localStorage.length; i++) {
		var value = window.localStorage.key(i);
		//Check key='product_'?
		if (value.indexOf('product_') == 0) {
			orders += value + '=' + localStorage.getItem(value)*1 + ',';
		}
	}
	return orders;
}
