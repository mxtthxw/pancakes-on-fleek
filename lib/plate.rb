class Plate

	def initialize(user_id)
		@user_id = user_id
		@contents = []
	end

	def add_item(pancake_id, q)
		@contents << {name: pancake_id, quantity: q}
	end

	def increase_item_quantity(pancake_id, quantity)
		current_quantity = @contents.find {|p| p[:name] == pancake_id}[:quantity]
		new_quantity = current_quantity + 1
		sub = {name: pancake_id, quantity: new_quantity}
		@contents.map! {|p| p[:name] == pancake_id ? sub : p }
	end

	def remove_item(pancake_id)
		@contents.delete_if {|pancake| pancake[:name] == pancake_id}
	end

	def decrease_item_quantity(pancake_id, quantity)
		current_quantity = @contents.find {|p| p[:name] == pancake_id}[:quantity]
		new_quantity = current_quantity - 1
		sub = {name: pancake_id, quantity: new_quantity}
		@contents.map! {|p| p[:name] == pancake_id ? sub : p }
	end

	def empty
		@contents = []
	end

	def plate_contents
		return @contents
	end

end