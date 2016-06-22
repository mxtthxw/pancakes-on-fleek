class User < ActiveRecord::Base

	def cart_count
  	$redis.scard "cart#{id}"
	end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
