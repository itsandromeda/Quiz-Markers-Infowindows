/*global document, google*/
var map, marker, singleLatLng;

function initMap() {
    "use strict";
    // Create a single latLng literal object.
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
        title: 'This is a marker!'
    });


    // TODO: Create a single marker appearing on initialize -
    // Create it with the position of the singleLatLng,
    // on the map, and give it your own title!
    // TODO: create a single infowindow, with your own content.
    // It must appear on the marker
    // TODO: create an EVENT LISTENER so that the infowindow opens when
    // the marker is clicked!
}