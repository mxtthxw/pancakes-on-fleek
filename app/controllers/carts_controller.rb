# require 'plate'

class CartsController < ApplicationController
  before_action :authenticate_user!

  def show
    @plate = Plate.where(user_id: 1)
    cart_ids = $redis.smembers current_user_cart
    @cart_pancakes = Pancake.find(cart_ids)
  end

  def add
    $redis.sadd current_user_cart, params[:pancake_id]
    render json: current_user.cart_count, status: 200
  end

  def remove
    $redis.srem current_user_cart, params[:pancake_id]
    render json: current_user.cart_count, status: 200
  end

  private

  def current_user_cart
    "cart#{current_user.id}"
  end
end
