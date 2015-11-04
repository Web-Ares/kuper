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
        var swiper = new Swiper(_obj, {
            slidesPerView: 1,
            autoplay: 5000,
            nextButton: _next,
            prevButton: _prev,
            pagination: _paginator,
            loop: true,
            spaceBetween: 0
        });
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

});