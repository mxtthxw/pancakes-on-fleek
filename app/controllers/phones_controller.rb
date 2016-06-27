class PhonesController < ApplicationController

	def new
		current_user
  	@phone = Phone.new
	end

	def create
		current_user
		@phone = Phone.new(phone_params)
		if @phone.save
			@phone.track_pancakes
			redirect_to user_path(@current_user)
			# respond_to do |format|
				# format.js
			# end
		else
			render 'new'
		end
	end

	private

	def phone_params
    params.require(:phone).permit(:number, :user_id)
  end

end
