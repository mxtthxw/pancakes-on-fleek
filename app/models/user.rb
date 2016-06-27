class User < ActiveRecord::Base

	has_one :phone
	has_many :addresses, through: :user_addresses
	has_many :user_addresses

	def cart_count
  	$redis.scard "cart#{id}"
	end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
