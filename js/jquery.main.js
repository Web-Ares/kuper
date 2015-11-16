$(function(){
    var Slider = function (obj) {

        //private properties
        var _self = this,
            _next = obj.find($('.swiper-button-next')),
            _prev = obj.find($('.swiper-button-prev')),
            _paginator = obj.find($('.swiper-promo__pagination')),
            _obj = obj;

        //private methods
        var _addEvents = function () {

            },
            _init = function () {
                _addEvents();
            };
        if (_obj.hasClass('swiper-promo')){
            var swiper = new Swiper(_obj, {
                slidesPerView: 1,
                autoplay: 5000,
                pagination: _paginator,
                loop: true,
                paginationClickable: true
            });
        }
        if (_obj.hasClass('swiper-container')){
            var swiper = new Swiper(_obj, {
                slidesPerView: 1,
                loop: true,
                autoplay: 10000
            });
        }
        if (_obj.hasClass('swiper-customer')){
            var swiper = new Swiper(_obj, {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                autoplay: 5000,
                loop: true,
                loopedSlides: 20,
                coverflow: {
                    rotate: 0,
                    stretch: -150,
                    depth: 450,
                    modifier: 1,
                    slideShadows : false
                }
            });
        }
        //public properties

        //public methods

        _init();
    };

    $('.swiper-promo').each(function () {
        Slider($(this));
    });

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $("a.group").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });
    $('.swiper-customer').each(function () {
        Slider($(this));
    });
});