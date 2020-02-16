$(document).ready(function(){
    $.fn.isInViewport = function(){
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    if (window.innerWidth < 768){ 
        $('.menu-button').click(
            function(e) {
                e.preventDefault();
                $('#menu-overlay').slideToggle(200);
                $('.line-1').toggleClass('open');
                $('.line-2').toggleClass('open');
                $('.line-3').toggleClass('open');
            }
        );

        $('#menu-overlay a').click( 
            function() {
                $('#menu-overlay').slideToggle(200);
                $('.line-1').toggleClass('open');
                $('.line-2').toggleClass('open');
                $('.line-3').toggleClass('open');
            }
        );
    }
    
    $('a.webvr').addClass("open");

    $('a.webvr').click(
        function(e) {
            e.preventDefault();
            $('#webvr').show(500);
            $('#outreach, #event1, #event2').hide(500);
            $('a.webvr').addClass('open');
            $('a.outreach, a.event1, a.event2').removeClass('open');
        }
    );

    $('a.outreach').click(
        function(e){
            e.preventDefault();
            $('#webvr, #event1, #event2').hide(500);
            $('#outreach').show(500);
            $('a.outreach').addClass('open');
            $('a.webvr, a.event1, a.event2').removeClass('open');
        }
    );

    $('a.event1').click(
        function(e){
            e.preventDefault();
            $('#webvr, #outreach, #event2').hide(500);
            $('#event1').show(500);
            $('a.event1').addClass('open');
            $('a.outreach, a.webvr, a.event2').removeClass('open');
        }
    );

    $('a.event2').click(
        function(e){
            e.preventDefault();
            $('#webvr, #outreach, #event1').hide(500);
            $('#event2').show(500);
            $('a.event2').addClass('open');
            $('a.outreach, a.event1, a.webvr').removeClass('open');
        }
    );
    
    $(window).scroll(function() {
        if (window.innerWidth >= 768){
            if ($(this).scrollTop() > $(window).height() ) {
                $('#menu-overlay').css("background-color", "rgb(33, 56, 91, .7)");
                $(".menu a").css({"color": "#fff", "margin": "5px 5px", "padding": "5px 20px"});
            } else {
                $('#menu-overlay').css("background-color", "transparent");
                $(".menu a").css({"color": "#000", "margin": "10px 5px", "padding": "10px 20px"});
            }
        }
    });
    
    $(window).on('resize scroll', function(){
        $('.event, .event-list, .info div, .brand-img, .brand-text').each(function() {                    
            if ($(this).isInViewport()) {
                $(this).addClass('come-up');
            }
        });

        $('h1').each(function() {                    
            if ($(this).isInViewport()) {
                $(this).addClass('slide-from-left');
            }
        });

        $('.social, .heading p').each(function() {
            if ($(this).isInViewport()) {
                $(this).addClass('slide-from-right');
            }
        });
    });

    $(window).on('load', function() {
        $('p.welcome-message').addClass('come-up');
        if (window.innerWidth > 768){
            $('.menu').addClass('slide-from-left');
        }
    });
});