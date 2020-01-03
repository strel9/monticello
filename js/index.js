'use strict';

$('.ba-slider1').slick(
    {
        vertical: false,
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: false
    }
);
$('.ba-slider2').slick(
    {
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        autoplay: true
    }
);


var map;
function initMap() {
    let nolan = { lat: 40.6863028, lng: -73.9072198 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: nolan,
        // height: 700,
        // icon: './img/pin.png',
        // icon: './img/cupcake.svg',
        zoom: 14,
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
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
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
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
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
    });

    var marker = new google.maps.Marker({
        position: nolan,
        map: map,
        // title: '123',

        icon: {
            url: './img/pin.png',
            origin: new google.maps.Point(0, 0),
            size: new google.maps.Size(62, 62)
            // anchor: new google.maps.Anchor(62, 62),
        }
    });
}

// gmap json


// скролл плавный настроить
// $(document).ready(function () {
//     $("#menu").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({ scrollTop: top }, 1500);
//     });
// });
// 
// $(document).ready(function() {
//     $('a[href^="#"]').click(function () { 
//       elementClick = $(this).attr("href");
//       destination = $(elementClick).offset().top;
//       if($.browser.safari){
//         $('body').animate( { scrollTop: destination }, 1100 );
//       }else{
//         $('html').animate( { scrollTop: destination }, 1100 );
//       }
//       return false;
//     });
//   });

// скролл плавный настроить
// var $page = $('html, body');
// $('a[href*="#contact"]').click(function () {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });

// 
// $(document).ready(function () {
//     $('a[href^="#"]').bind('click.smoothscroll', function (e) {
//         e.preventDefault();

//         var target = this.hash,
//             $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 600, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

// });