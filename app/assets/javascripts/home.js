$(document).ready(function(){

	$('.generate-token').on('click', function(e){
		e.preventDefault();

		$.ajax({
			url: 'https://login.uber.com/oauth/v2/token',
			type: 'POST',
			headers: {
        'Content-Type': 'application/json'
      },
			data: JSON.stringify({
				'client_secret': 'qffBpmhaoca6mczpFdOr_Cf1e-wX5Bims6EN91kY',
				'client_id': 'OZpkN2dRAN3KClRpTeRe83nyYr4MjcYP',
				'grant_type': 'client_credentials',
				'scope': 'delivery'
			}),
			success: function (response) {
        alert("yay");
      },
      error: function () {
        alert("boo");
      }
    });

	});


	$(".generate-quote").on("click", function(e){
		e.preventDefault();

		$.ajax({
        url: 'https://sandbox-api.uber.com/v1/deliveries/quote',
        type: 'POST',
        beforeSend: function(xhr){ 
        	xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiZGVsaXZlcnkiXSwic3ViIjoiMTEzOGJmNmUtNGU4ZS00Y2E0LTlhNDAtZTdmNWMzYjdhN2FmIiwiaXNzIjoidWJlci11czEiLCJqdGkiOiI5MTE0MmViYi04OThkLTQxNmMtOTRkYy0yZDEyNTMzYjlhMjkiLCJleHAiOjE0NjkzOTI3MzcsImlhdCI6MTQ2NjgwMDczNywidWFjdCI6ImNzZWp6T1RSYThuMWtncklXR3FiWXZSTnJnT2pHdCIsIm5iZiI6MTQ2NjgwMDY0NywiYXVkIjoiT1pwa04yZFJBTjNLQ2xScFRlUmU4M255WXI0TWpjWVAifQ.BGvtiP16WJEUOgXqpzISNy5a9ML18xuPQxB0ovCogy90eeQKWc4u2iJlfDaJpp6rD4tHeuquDr-TNHJHcKUT9wb5enMkLGuN2PBLrr8IZaiH6mj6z94pnQOSZMrmHB3Q3ckHKzD_ompkfREOrLoY5urE7R8418WLw_oAwKurraqK0qTlLjByzDLsTRGy2DGCkaPgo2bkYQrr54fwAUqcOXnkULujatY1h6eP4o9cWEsEnPL6-4HKuAyWhVNPhveToifSC2SojL7pFT1wGtIB7H7wZnFhMxNVrnl9Ur8IkWunuZPuXc04WBrYdNhvL3B_51h3xrT9rDY-wcXBRFRSrA');
        },
        headers: {
        	'Content-Type': 'application/json'
        },
        data: JSON.stringify({ 

        	'pickup': {
        		'location': {
        			'address': '90 John Street',
        			'address_2': '404',
        			'city': 'New York',
        			'state': 'NY',
        			'postal_code': '10038',
        			'country': 'US'
        		}
        	},

        	'dropoff': {
        		'location': {
        			'address': '30 Rockefeller Plaza',
        			'city': 'New York',
        			'state': 'NY',
        			'postal_code': '10112',
        			'country': 'US'
        		}
        	}

        }),

        success: function (response) {
            console.log(response);
        },
        error: function () {
            alert("NO PANCAKES FOR YOU");
        }
 
    });
		
	})
	

	$('.schedule_delivery').on('click', function(e){
			e.preventDefault();

			$.ajax({
				url: 'https://sandbox-api.uber.com/v1/deliveries',
				type: 'POST',
				beforeSend: function(xhr){ 
	      	xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiZGVsaXZlcnkiXSwic3ViIjoiMTEzOGJmNmUtNGU4ZS00Y2E0LTlhNDAtZTdmNWMzYjdhN2FmIiwiaXNzIjoidWJlci11czEiLCJqdGkiOiI5MTE0MmViYi04OThkLTQxNmMtOTRkYy0yZDEyNTMzYjlhMjkiLCJleHAiOjE0NjkzOTI3MzcsImlhdCI6MTQ2NjgwMDczNywidWFjdCI6ImNzZWp6T1RSYThuMWtncklXR3FiWXZSTnJnT2pHdCIsIm5iZiI6MTQ2NjgwMDY0NywiYXVkIjoiT1pwa04yZFJBTjNLQ2xScFRlUmU4M255WXI0TWpjWVAifQ.BGvtiP16WJEUOgXqpzISNy5a9ML18xuPQxB0ovCogy90eeQKWc4u2iJlfDaJpp6rD4tHeuquDr-TNHJHcKUT9wb5enMkLGuN2PBLrr8IZaiH6mj6z94pnQOSZMrmHB3Q3ckHKzD_ompkfREOrLoY5urE7R8418WLw_oAwKurraqK0qTlLjByzDLsTRGy2DGCkaPgo2bkYQrr54fwAUqcOXnkULujatY1h6eP4o9cWEsEnPL6-4HKuAyWhVNPhveToifSC2SojL7pFT1wGtIB7H7wZnFhMxNVrnl9Ur8IkWunuZPuXc04WBrYdNhvL3B_51h3xrT9rDY-wcXBRFRSrA');
	      },
	      headers: {
	      	'Content-Type': 'application/json'
	      },
	      data: JSON.stringify({
	      	'order_reference_id': '1',
	      	'items': [
	      		{
		    			'title': 'Original Pancake',
		    			'quantity': 2,
		    			'price': 2.99,
		    			'currency_code': 'USD',
		    			'is_fragile': true
	    			},
	    			{
	    				'title': 'The Mean Stack',
		    			'quantity': 1,
		    			'price': 5.99,
		    			'currency_code': 'USD',
		    			'is_fragile': true
	    			}
	    		],
	  			'pickup': {
	      		'location': {
	      			'address': '90 John Street',
	      			'address_2': '404',
	      			'city': 'New York',
	      			'state': 'NY',
	      			'postal_code': '10038',
	      			'country': 'US'
	      		},
	      		'contact': {
	      			'first_name': 'Joe',
	      			'last_name': 'Pancake',
	      			'company_name': 'NYCDA',
	      			'email': 'pancakes@nycda.com',
	      			'phone': {
	      				'number': '+15555555555',
	      				'sms_enabled': true
	      			}
	      		},
	      		'signature_required': false,
	      		'special_instructions': 'knock three times'
	      	},

	      	'dropoff': {
	      		'location': {
	      			'address': '30 Rockefeller Plaza',
	      			'city': 'New York',
	      			'state': 'NY',
	      			'postal_code': '10112',
	      			'country': 'US'
	      		},
	      		'contact': {
	      			'first_name': 'Liz',
	      			'last_name': 'Lemon',
	      			'company_name': 'NBC',
	      			'email': 'thew.donyc@gmail.com',
	      			'phone': {
	      				'number': '+16304846325',
	      				'sms_enabled': true
	      			},
	      			'send_email_notifications': true,
	      			'send_sms_notifications': true
	      		},
	      		'special_instructions': 'pancakes must arrive via unicycle',
	      		'signature_required': false
	      	},
	      }),

	      success: function (response) {
	        console.log(response.fee);
	      },

	      error: function () {
	        alert("boo");
	      }

			});

	})




});