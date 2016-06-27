class AddressesController < ApplicationController
  def new
  	@address = Address.new
  end

  def create
  	current_user
  	@address = Address.new(address_params)
  	if @address.save
  		@address.users << current_user
  		redirect_to user_path(@current_user)
  	else
  		render 'new'
  	end
  end

  def destroy
  end

  def show
    @address = Address.find(params[:id])
  end

  private

  def address_params
  	params.require(:address).permit(:address, :address_2, :city, :state, :postal_code, :country)
  end

end
