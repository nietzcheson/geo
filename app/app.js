$(document).ready(function(){


        var latitude = 21.192689;
        var longitude = -86.8213484;

        var signs = ['-', '+'];

        var perimeterKM = 50;
        var perimeterSearchKM = 20;

        var perimeter = (perimeterKM / 111.12).toFixed(7);
        var perimeterSearch = (perimeterSearchKM / 111.12).toFixed(7);

        var map = new GMaps({
                el: '#map',
                lat: latitude,
                lng: longitude
        });

        GMaps.geolocate({
                success: function(position){
                        map.setCenter(latitude, longitude)
                }
        });

        map.drawOverlay({
                lat: latitude,
                lng: longitude,
                content: '<div class="overlay">Me</div>'
        });

        map.addMarker({
                lat: latitude,
                lng: longitude,
                infoWindow: {
                        content: '<p>'+latitude+', '+longitude+'</p>'
                }
        });

        var latNorte = parseFloat(latitude) + parseFloat(perimeter);
        var latSur = parseFloat(latitude) - parseFloat(perimeter);
        var lngEste = parseFloat(longitude) + parseFloat(perimeter);
        var lngOeste = parseFloat(longitude) - parseFloat(perimeter);

        map.addMarker({
                lat: latNorte,
                lng: longitude,
                infoWindow: {
                        content: '<p>'+latNorte+', '+longitude+'</p>'
                }
        });

        map.addMarker({
                lat: latSur,
                lng: longitude,
                infoWindow: {
                        content: '<p>'+latNorte+', '+longitude+'</p>'
                }
        });

        map.addMarker({
                lat: latitude,
                lng: lngEste,
                infoWindow: {
                        content: '<p>'+latNorte+', '+longitude+'</p>'
                }
        });

        map.addMarker({
                lat: latitude,
                lng: lngOeste,
                infoWindow: {
                        content: '<p>'+latNorte+', '+longitude+'</p>'
                }
        });

        var path = [
                [
                        latSur,
                        longitude
                ],
                [
                        latitude,
                        lngEste
                ],

                [
                        latNorte,
                        longitude
                ],
                [
                        latitude,
                        lngOeste
                ],

        ];

        polygon = map.drawPolygon({
                paths: path, // pre-defined polygon shape
                strokeColor: '#BBD8E9',
                strokeOpacity: 1,
                strokeWeight: 3,
                fillColor: '#BBD8E9',
                fillOpacity: 0.6
        });

        var latNorteSearch = parseFloat(latitude) + parseFloat(perimeterSearch);
        var latSurSearch = parseFloat(latitude) - parseFloat(perimeterSearch);
        var lngEsteSearch = parseFloat(longitude) + parseFloat(perimeterSearch);
        var lngOesteSearch = parseFloat(longitude) - parseFloat(perimeterSearch);

        var path = [
                [
                        latSurSearch,
                        longitude
                ],
                [
                        latitude,
                        lngEsteSearch
                ],

                [
                        latNorteSearch,
                        longitude
                ],
                [
                        latitude,
                        lngOesteSearch
                ],

        ];

        polygon = map.drawPolygon({
                paths: path, // pre-defined polygon shape
                strokeColor: '#BBD8E9',
                strokeOpacity: 1,
                strokeWeight: 3,
                fillColor: 'red',
                fillOpacity: 0.7
        });

        for (var i = 0; i < 100; i++) {

                var sign = signs[Math.floor(Math.random() * signs.length)];

                if(sign == '-'){
                        //console.log('Menos: '+sign);

                        var lat = (Math.random() * (0.00 - perimeter) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 + perimeter) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });

                        var lat = (Math.random() * (0.00 + perimeter) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 - perimeter) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });

                }else if(sign == '+'){

                        var lat = (Math.random() * (0.00 + perimeter) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 + perimeter) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });

                        var lat = (Math.random() * (0.00 - perimeter) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 - perimeter) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });
                }
        }

});
