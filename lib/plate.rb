class Plate

	attr_accessor :user_id

	def initialize(user_id)
		@user_id = user_id
		@contents = []
	end

	def add_item(pancake_id, quantity, price)
		@contents << {name: pancake_id, quantity: quantity, price: price}
	end

	def increase_item_quantity(pancake_id, quantity, price)
		current_quantity = @contents.find {|p| p[:name] == pancake_id}[:quantity]
		new_quantity = current_quantity + 1
		sub = {name: pancake_id, quantity: new_quantity, price: price}
		@contents.map! {|p| p[:name] == pancake_id ? sub : p }
	end

	def remove_item(pancake_id)
		@contents.delete_if {|pancake| pancake[:name] == pancake_id}
	end

	def decrease_item_quantity(pancake_id, quantity, price)
		current_quantity = @contents.find {|p| p[:name] == pancake_id}[:quantity]
		new_quantity = current_quantity - 1
		sub = {name: pancake_id, quantity: new_quantity, price: price}
		@contents.map! {|p| p[:name] == pancake_id ? sub : p }
	end

	def empty
		@contents = []
	end

	def plate_contents
		return @contents
	end

	def item_count
		@contents.length
	end

end