/*global document, google*/
var map, marker, singleLatLng, contentString, infowindow,
    image = "https://68.media.tumblr.com/avatar_bd2e54830b60_128.png";

function initMap() {
    "use strict";
    var styles = [{
            "featureType": "administrative",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "administrative.province",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 65
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": "50"
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "lightness": "30"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "lightness": "40"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#ffff00"
            }, {
                "lightness": -25
            }, {
                "saturation": -97
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "lightness": -25
            }, {
                "saturation": -100
            }]
        }];

    singleLatLng = {
        lat: 40.74135,
        lng: -73.99802
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: singleLatLng,
        styles: styles,
        zoom: 14,
        mapTypeControl: false
    });
    marker = new google.maps.Marker({
        position: singleLatLng,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        icon: image,
        title: 'This is a marker!'
    });
    infowindow = new google.maps.InfoWindow({
        content: "<b>lat:</b> 40.74135<br><b>lng:</b> -73.99802"
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}