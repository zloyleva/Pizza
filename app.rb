#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
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
  "Hello World"
end