class UsersController < ApplicationController

	def show
		current_user
		@user = User.find(params[:id])
		@phones = Phone.where(user_id: @user.id)
		# @user_addresses = Address.where(user_id: @user.id)
		# @addresses = Address.where(user_id: @user.id)
	end

end