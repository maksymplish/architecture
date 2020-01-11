'use strick'

$('.ba-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3
 });

 ;(function () {
	'use strict';

	function initBaMap() {
	
		 let cities = {
			  
			  poltava : {
					coords : { lat: 49.589100, lng: 34.557851 },
					address : 'Ну хоть за карту 1 бал будет?'
			  },

		 }
		 let mapCenter = cities.poltava.coords;

		 let mapEl = document.getElementById('map');
		 let mapOptions = { 
			  zoom: 13, 
			  center: mapCenter,
			  disableDefaultUI: true,    
			  styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					 {
						"color": "#f5f5f5"
					 }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#bdbdbd"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "poi.business",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#ffffff"
					 }
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#757575"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#dadada"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#616161"
					 }
				  ]
				},
				{
				  "featureType": "road.local",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels",
				  "stylers": [
					 {
						"visibility": "off"
					 }
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#e5e5e5"
					 }
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#eeeeee"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					 {
						"color": "#c9c9c9"
					 }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					 {
						"color": "#9e9e9e"
					 }
				  ]
				}
			 ]     
		 };
		 let $baMap = new google.maps.Map( mapEl, mapOptions );
		 for (const city in cities) {            
			  let marker = new google.maps.Marker(
					{ 
						 position: cities[city].coords, 
						 map: $baMap,
						 icon: "img/pin.png"
					}
			  );
			  let infowindow = new google.maps.InfoWindow({
					content: cities[city].address
				});          
				marker.addListener('mouseover', function() {
					infowindow.open($baMap, marker);
				});
		 }

		 let citySelect = document.querySelector('[data-city-select]');
		 
		 citySelect.addEventListener('change', () => {
			  let city = citySelect.value;
			  let newCoords = cities[city].coords;
			  
			  $baMap.setCenter(newCoords);            
		 });
	}
	window.addEventListener('load', initBaMap);
})();