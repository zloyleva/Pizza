class CreateOrders < ActiveRecord::Migration
  def change

  	create_table :orders do |t|
		t.text :orders_string
		t.text :name
		t.text :phone
		t.text :adress

  		t.timestamps
  	end

  end
end
