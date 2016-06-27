class Address < ActiveRecord::Base

	has_many :users, through: :user_addresses

end
