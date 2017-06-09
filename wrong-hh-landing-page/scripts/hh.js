// JavaScript Document

function initialize() {
	var myLatlng = new google.maps.LatLng(38.963177,-77.087515);
	var mapOptions = {
		zoom: 15,
		streetViewControl:false,
		mapTypeControl: false,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map
	});
	
	google.maps.event.addListener(marker, "click", function () {
		window.open("https://maps.google.com/maps?q=+5480+Wisconsin+Avenue,+Chevy+Chase,+MD+20815&hl=en&sll=38.963177,-77.087515","_blank");
	});
}