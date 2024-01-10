
$('.multiple-card-slider .carousel .carousel-inner .carousel-item .cards-wrapper .card').each(function() {
    var currentCardId = '#' + $(this).attr('id');
    //const multipleItemCarousel = document.querySelector(currentCarouselId);

    $(this).addEventListener('click', (function (currentCardId) {
                return function () {
                    console.log('carousel listener triggered')
                    var base_url = window.location.hostname
                    if (env_vars['env'] == 'qual') {
                        var url = "http://" + base_url + ":5000/collection/"
                    } else {
                        var url = "http://" + base_url + "/collection/"
                    }
                    const myUrlWithParams = new URL(url);
                    underscore = marker.indexOf("_");
                    attr_marker = marker.substr(0,underscore);
                    myUrlWithParams.searchParams.append('feature', currentCardId);
                    window.location.replace(myUrlWithParams.href);
                    }
                })(currentCardId))
});

$('.multiple-card-slider .carousel').each(function() {
    var currentCarouselId = '#' + $(this).attr('id');
    const multipleItemCarousel = document.querySelector(currentCarouselId);

    $(currentCarouselId + ' .carousel-control-next').on('click', function() {
            if(scrollPosition < (carouselWidth - (cardWidth * 4))) {
                console.log('next')
                scrollPosition = scrollPosition + cardWidth;
                $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition}, 600);
            }
        });
        document.getElementById(marker).addEventListener('click', (function (marker) {
                return function () {
                    console.log('carousel listener triggered')
                    var base_url = window.location.hostname
                    if (env_vars['env'] == 'qual') {
                        var url = "http://" + base_url + ":5000/collection/"
                    } else {
                        var url = "http://" + base_url + "/collection/"
                    }
                    const myUrlWithParams = new URL(url);
                    underscore = marker.indexOf("_");
                    attr_marker = marker.substr(0,underscore);
                    myUrlWithParams.searchParams.append('feature', attr_marker);
                    window.location.replace(myUrlWithParams.href);
                    }
                })(marker))

    if(window.matchMedia("(min-width:576px)").matches){
        const carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: 1500,
            wrap: true
        })
        var carouselWidth = $(currentCarouselId + ' .carousel-inner')[0].scrollWidth;
        var cardWidth = $(currentCarouselId + ' .carousel-item').width();
        var scrollPosition = 0;
        $(currentCarouselId + ' .carousel-control-next').on('click', function() {
            if(scrollPosition < (carouselWidth - (cardWidth * 4))) {
                console.log('next')
                scrollPosition = scrollPosition + cardWidth;
                $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition}, 600);
            }
        });
        $(currentCarouselId + ' .carousel-control-prev').on('click', function() {
            if(scrollPosition > 0) {
                console.log('prev')
                scrollPosition = scrollPosition - cardWidth;
                $(currentCarouselId + ' .carousel-inner').animate({scrollLeft: scrollPosition}, 600);
            }
        });
    } else {
        $(multipleItemCarousel).addClass('slide');
    }
});

