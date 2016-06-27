class Phone < ActiveRecord::Base

	belongs_to :user

	def twilio_client
  	Twilio::REST::Client.new('ACc03f9083cce4089f2601e7775b1bc285', '15d16620e192f43b85a888f6332255e6')
	end

	def scheduled
  	twilio_client.messages.create(
	    to: number,
	    from: '+16307556238',
	    body: "Your pancakes are being prepared."
	  )
	end

	def en_route
  	twilio_client.messages.create(
	    to: number,
	    from: '+16307556238',
	    body: "Your pancakes are on the way!"
	  )
	end

	def arrive
  	twilio_client.messages.create(
	    to: number,
	    from: '+16307556238',
	    body: "Your pancakes have arrived."
	  )
	end
	
end
