$(function(){
        var Slider = function (obj) {

        //private properties
        var _self = this,
            _next = obj.find($('.swiper-button-next')),
            _prev = obj.find($('.swiper-button-prev')),
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
            loop: true,
            spaceBetween: 0
        });
        //public properties

        //public methods


        _init();
    };
    $('.swiper-container').each(function () {
        Slider($(this));
    });
} );

var Shablon = function (obj) {
    this.obj = obj;


    this.init();
};
Shablon.prototype = {
    init: function () {
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function () {
        var self = this;

        return {
            addEvents: function () {

            },
            build: function () {
                self.core.addEvents();
            }
        };
    }
};

$(window).on({
    load: function () {

    }
});