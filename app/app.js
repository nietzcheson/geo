$(document).ready(function(){


        var latitude = 21.192689;
        var longitude = -86.8213484;

        var grade = 1;
        var latGradeKm = 111.12; // One latitude grade
        var km = 100;

        var xGrade = ((km*grade) / latGradeKm).toFixed(7);

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

        var latNorte = parseFloat(latitude) + parseFloat(xGrade);
        var latSur = parseFloat(latitude) - parseFloat(xGrade);
        var lngEste = parseFloat(longitude) + parseFloat(xGrade);
        var lngOeste = parseFloat(longitude) - parseFloat(xGrade);;

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

        //
        var max = 0.0099999;
        //
        var signs = ['-', '+'];
        //
        // var map = new GMaps({
        //         el: '#map',
        //         lat: latitude,
        //         lng: longitude
        // });
        //
        // GMaps.geolocate({
        //         success: function(position){
        //                 map.setCenter(latitude, longitude)
        //         }
        // });
        //
        // map.drawOverlay({
        //         lat: latitude,
        //         lng: longitude,
        //         content: '<div class="overlay">Me</div>'
        // });
        //
        for (var i = 0; i < 100; i++) {

                var sign = signs[Math.floor(Math.random() * signs.length)];

                if(sign == '-'){
                        //console.log('Menos: '+sign);

                        var lat = (Math.random() * (0.00 - xGrade) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 + xGrade) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });

                        var lat = (Math.random() * (0.00 + xGrade) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 - xGrade) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });

                }else if(sign == '+'){
                        //console.log('Más: '+sign);

                        var lat = (Math.random() * (0.00 + xGrade) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 + xGrade) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });

                        var lat = (Math.random() * (0.00 - xGrade) + latitude).toFixed(7);
                        var lng = (Math.random() * (0.00 - xGrade) + longitude).toFixed(7);

                        map.addMarker({
                                lat: lat,
                                lng: lng,
                                infoWindow: {
                                        content: '<p>'+lat+', '+lng+'</p>'
                                }
                        });
                }

                //console.log((Math.random() * (0.00 - max) + latitude).toFixed(7));
                //console.log((Math.random() * (0.00 - max) + latitude).toFixed(7));
        }



    //console.log(parseFloat(latitude) - parseFloat(0.001000));
    //

    //

    //
    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    //
    //
    // sum = 0.05;
    //
    // console.log((latitude + sum).toFixed(12));
    //
    // // for (var i = 0; i < 100; i++) {
    // //
    // //     latitudeRand = (Math.random() * (0.00 - sum) + sum).toFixed(7);
    // //     longitudeRand = (Math.random() * (0.00 - sum) + sum).toFixed(7);
    // //
    // //     console.log(latitudeRand);
    // //     console.log(longitudeRand);
    // //

    // //
    // // }
    //

});
