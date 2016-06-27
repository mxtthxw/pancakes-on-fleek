$(document).ready(function(){

	var address1 = $('address1').html();
	var address2 = $('address2').html();
	var city = $('city').html();
	var state = $('state').html();
	var zip = $('zip').html();

	$('.send-pancakes').on('click', function(e){
		e.preventDefault();

		$.ajax({
        url: 'https://sandbox-api.uber.com/v1/deliveries/quote',
        type: 'POST',
        beforeSend: function(xhr){ 
        	xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiZGVsaXZlcnkiXSwic3ViIjoiMTEzOGJmNmUtNGU4ZS00Y2E0LTlhNDAtZTdmNWMzYjdhN2FmIiwiaXNzIjoidWJlci11czEiLCJqdGkiOiIzNGIwMTJiZC03MTdmLTQ1YzQtOTJlYy05MDA0MDg2ZmExNTkiLCJleHAiOjE0Njk2MzkzODEsImlhdCI6MTQ2NzA0NzM4MCwidWFjdCI6IkhTVmJJajAzSGxxVUdXNFY2SVRCZjZpMGJTVlhkNSIsIm5iZiI6MTQ2NzA0NzI5MCwiYXVkIjoiT1pwa04yZFJBTjNLQ2xScFRlUmU4M255WXI0TWpjWVAifQ.hjYPgjHFqbodKFRt-oZn2DW6OCrbOdLQnPBvOtfsBs5eSn3FklHcfkaCSV2zNElF4QvLFoHfY9jQYOlQvkV2KI-YqmMPfIM_yqsfrQuIM5qk5FB421NoVwleJP86VkQN0Mwgr21UhVEyf79BUbRpF5NYD9TUU5jjmqKrGK60GFYHZ5FqHZF7mDGjuc7Np-GLFB8PLNTRkSuB5wuM3YZreqyaVZ4s1u9C21r-3mXKMNSGfgLrVXf91W2cpB8dJB2qEmBdIqfLDQTkHtiwG0URCzMJb5xvAl_k_i_EKkmsyiE2lthsBLwDH89uAqRW4Oy7_diijWqYlmrCq9jAnUgkHA');
        },
        headers: {
        	'Content-Type': 'application/json'
        },
        data: JSON.stringify({

        	'pickup': {
        		'location': {
        			'address': '30 Rockefeller Plaza',
        			'city': 'New York',
        			'state': 'NY',
        			'postal_code': '10112',
        			'country': 'US'
        		}
        	},

        	'dropoff': {
        		'location': {
        			// 'address': address1,
        			'address': '90 John Street',
        			// 'address_2': address2,
        			'address_2': '404',
        			// 'city': city,
        			'city': 'New York',
        			// 'state': state,
        			'state': 'NY',
        			// 'postal_code': zip,
        			'postal_code': '10038',
        			'country': 'US'
        		}
        	}

        }),

        success: function (response) {
            console.log(response);
            var deliveryQuote = response;
            var startTime2 = new Date(deliveryQuote['quotes'][1].start_time * 1000);
            var startTimeString2 = startTime2.toString();
            var endTime2 = new Date(deliveryQuote['quotes'][1].end_time * 1000);
            var endTimeString2 = endTime2.toString();

            var startTime3 = new Date(deliveryQuote['quotes'][2].start_time * 1000);
            var startTimeString3 = startTime3.toString();
            var endTime3 = new Date(deliveryQuote['quotes'][2].end_time * 1000);
            var endTimeString3 = endTime3.toString();

            var startTime4 = new Date(deliveryQuote['quotes'][3].start_time * 1000);
            var startTimeString4 = startTime4.toString();
            var endTime4 = new Date(deliveryQuote['quotes'][3].end_time * 1000);
            var endTimeString4 = endTime4.toString();

            $('.options').html("Options: ");
            // $('.button1').html('<button class="option1">Choose This Option</button>');
            $('.button1').html('<button class="option1">Choose This Option</button>');
            $('.button2').html('<button class="option2">Choose This Option</button>');
            $('.button3').html('<button class="option3">Choose This Option</button>');
            $('.button4').html('<button class="option4">Choose This Option</button>');

            $('.quote1').html('Order Number: ' + deliveryQuote['quotes'][0].quote_id);
            $('.price1').html('$' + deliveryQuote['quotes'][0].fee + '.00');
            $('.window1').html('Deliver now!');

            $('.quote2').html('Order Number: ' + deliveryQuote['quotes'][1].quote_id);
            $('.price2').html('$' + deliveryQuote['quotes'][1].fee + '.00');
            $('.window2').html('Deliver between ' + startTimeString2.substring(15, startTimeString2.length - 18) + ' and ' + endTimeString2.substring(15, startTimeString2.length - 18) + ' today!');

            $('.quote3').html('Order Number: ' + deliveryQuote['quotes'][2].quote_id);
            $('.price3').html('$' + deliveryQuote['quotes'][2].fee + '.00');
            $('.window3').html('Deliver between ' + startTimeString3.substring(15, startTimeString3.length - 18) + ' and ' + endTimeString3.substring(15, startTimeString3.length - 18) + ' today!');

            $('.quote4').html('Order Number: ' + deliveryQuote['quotes'][3].quote_id);
            $('.price4').html('$' + deliveryQuote['quotes'][3].fee + '.00');
            $('.window4').html('Deliver between ' + startTimeString4.substring(15, startTimeString4.length - 18) + ' and ' + endTimeString4.substring(15, startTimeString4.length - 18) + ' today!');

        },
        error: function () {
            // alert("NO PANCAKES FOR YOU");
        }
 
    });
		
	})

	$('.option1').on('click', function(){
		alert('yay');
	})

});