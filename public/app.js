function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button()
{
	var text = 'Cart (' + total_sc() + ')';
	$('#orders_button').val(text);
}

function add_to_cart(id)
	{
		var key = 'product_' + id;
		var x = window.localStorage.getItem(key)*1;
		x++;
		window.localStorage.setItem(key, x);
		
		update_orders_input();
		update_orders_button();
	}

function remove_from_cart(id)
	{
		var key = 'product_' + id;
		window.localStorage.removeItem(key);

		update_orders_input();
		update_orders_button();
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
	return total;
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

function cancel_order()
{
	window.localStorage.clear();
	update_orders_input();
	update_orders_button();
	return false;
}