class UsersController < ApplicationController

	def show
		current_user
		@user = User.find(params[:id])
	end

end