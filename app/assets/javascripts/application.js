// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require cookies
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

if(!cartCount) {
	var cartCount = 0;
}

var pancakeCheck = function(callback) {

if (Cookies.get("original") == null || Cookies.get("original") == NaN) {
	Cookies.set("original", 0);
} else {
	var originalCount = Cookies.get("original");
}

if (Cookies.get("chocolate") == null || Cookies.get("chocolate") == NaN) {
	Cookies.set("chocolate", 0);
} else {
	var chocolateCount = Cookies.get("chocolate");
}

if (Cookies.get("blueberry") == null || Cookies.get("blueberry") == NaN) {
	Cookies.set("blueberry", 0);
} else {
	var blueberryCount = Cookies.get("blueberry");
}

if (Cookies.get("waffle") == null || Cookies.get("waffle") == NaN) {
	Cookies.set("waffle", 0);
} else {
	var waffleCount = Cookies.get("waffle");
}

if (Cookies.get("mean") == null || Cookies.get("mean") == NaN) {
	Cookies.set("mean", 0);
} else {
	var meanCount = Cookies.get("mean");
}

callback();

};

$(".add-original").on("click", function(){
	// alert("hi");
})

var pancakeCount = function(callback) {
	cartCount = parseInt(originalCount) + parseInt(chocolateCount) + parseInt(blueberryCount) + parseInt(waffleCount) + parseInt(meanCount);
	console.log(cartCount);
	callback();
}

var cartDisplay = function() {
	// alert("hi");
	// $(".plate-count").html(cartCount);
}

pancakeCheck(pancakeCount(cartDisplay()));