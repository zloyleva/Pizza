#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

get '/' do
	@products = Product.all
	erb :index
end

get '/about' do
		erb :about
end
get '/cart' do
	
end

post '/cart' do

	@orders_pizza = params[:orders].split(",")
	@products = Product.all

	erb :cart
end

post '/place_order' do

	@get_order = Order.create params[:form_order]

	erb :thanks
end