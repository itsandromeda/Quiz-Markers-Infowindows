/*global document, google*/
var map, marker, singleLatLng, contentString, infowindow,
    image = "https://twitchemotes.com/favicon.png";

function initMap() {
    "use strict";
    singleLatLng = {
        lat: 40.74135,
        lng: -73.99802
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: singleLatLng,
        zoom: 14
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
    // TODO: Create a single marker appearing on initialize -
    // Create it with the position of the singleLatLng,
    // on the map, and give it your own title!
    // TODO: create a single infowindow, with your own content.
    // It must appear on the marker
    // TODO: create an EVENT LISTENER so that the infowindow opens when
    // the marker is clicked!
}