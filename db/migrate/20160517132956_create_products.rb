class CreateProducts < ActiveRecord::Migration
  def change
  	create_table :products do |item|
  		item.string :title
  		item.text :description
  		item.decimal :price
  		item.decimal :size
  		item.boolian :is_spicy
  		item.boolian :is_veg
  		item.boolian :is_best_offer
  		item.string :path_to_image

  		item.timestamps
  	end
  end
end
