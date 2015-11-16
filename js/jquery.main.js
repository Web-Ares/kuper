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
                slidesPerView: 2,
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
                slidesPerView: 5,
                autoplay: 0000,
                loop: true,
                loopedSlides: 20,
                coverflow: {
                    rotate: 0,
                    stretch: -100,
                    depth: 250,
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

    $('.swiper-customer').each(function () {
        Slider($(this));
    });
});