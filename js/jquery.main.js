var popup = null;

$(function(){
    $('.popup').each(function(){
        popup = new Popup($(this));
    });

    $('.swiper-promo').each(function () {
        Slider($(this));
    });

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $('.swiper-customer').each(function () {
        Slider($(this));
    });

    $('.swiper-gallery').each(function () {
        Slider($(this));
    });

    $('.address-map').each(function () {
        var myMap;
        function init () {
            myMap = new ymaps.Map('map', {
                center: $('.address-map').attr('data-coord').split(', '),
                zoom: 16
            });
            myMap.controls
                .add('zoomControl', { left: 5, top: 5 })
                .add('typeSelector')
                .add('mapTools', { left: 35, top: 5 });
        }
        ymaps.ready(init);
    });

    $('.callback__form').submit(function () {
        $.ajax({
            url: 'php/form.php',
            dataType: 'html',
            timeout: 20000,
            type: "GET",
            data: {
                type : 'callback',
                name: $('#callback-popup__name').val(),
                phone: $('#callback-popup__phone').val(),
                time: $('#callback-popup__time').val()
            },
            success: function (msg) {
                popup.core.show('thanks');
                setTimeout(function () {
                    popup.core.hide('thanks')
                }, 3000);
            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert(XMLHttpRequest.statusText);
                }
            }
        });
        return false;
    });

    $('.message__form').submit(function () {
        $.ajax({
            url: 'php/form.php',
            dataType: 'html',
            timeout: 20000,
            type: "GET",
            data: {
                type : 'message',
                name: $('#message-popup__name').val(),
                phone: $('#message-popup__email').val(),
                time: $('#message-popup__message').val()
            },
            success: function (msg) {
                popup.core.show('thanks');
                setTimeout(function () {
                    popup.core.hide('thanks')
                }, 3000);
            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert(XMLHttpRequest.statusText);
                }
            }
        });
        return false;
    });

    $('.proffesions__item dt').each(function(){
        var curElem = $(this),
            dtElem = $('.proffesions__item dt'),
            nextElem = curElem.next('dd'),
            ddElem = $('.proffesions__item dd');
        if(curElem.hasClass('open')){
            curElem.addClass('open');
            nextElem.slideDown();
        }
        $(this).on({
            'click':function(){
                if (nextElem.length){
                    if(!curElem.hasClass('open')){
                        curElem.addClass('open');
                        nextElem.slideDown();

                        return false;
                    }
                    else{
                        dtElem.removeClass('open');
                        nextElem.slideUp();
                    }
                }


            }
        });
    });
    $("a[rel=index]").fancybox();
});

var Slider = function (obj) {

    //private properties
    var _self = this,
        _item = obj.find($('.swiper-slide')),
        _next = obj.find($('.swiper-button-next')),
        _prev = obj.find($('.swiper-button-prev')),
        _paginator = obj.find($('.swiper-promo__pagination')),
        _paginatorGallery = obj.find($('.swiper-gallery_pagination')),
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('swiper-promo')){
        var _swiperPromo = new Swiper(_obj, {
            slidesPerView: 1,
            autoplay: 5000,
            pagination: _paginator,
            loop: true,
            paginationClickable: true
        });
    }
    if (_obj.hasClass('swiper-container')){
        var _swiperContainer = new Swiper(_obj, {
            slidesPerView: 1,
            loop: true,
            autoplay: 10000
        });
    }
    if (_obj.hasClass('swiper-gallery')){
        var _swiperGallery = new Swiper(_obj, {
            loop:true,
            autoplay: 0,
            effect: 'fade',
            autoplayDisableOnInteraction: false,
            pagination: _paginatorGallery,
            paginationClickable: true,
            paginationBulletRender: function (i, className) {
                var _slide = _item.eq(i),
                    _bg_image = _slide.attr("data-href");
                return '<span class="' + className + '" style="background-image: url('+ _bg_image +')"></span>';
            }
        });
    }
    if (_obj.hasClass('swiper-customer')){
        var _swiperCustomer = new Swiper(_obj, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 5,
            autoplay: 10000,
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

var Popup = function( obj ){
    this.popup = obj;
    this.btnShow = $('.popup__open');
    this.btnClose = obj.find( '.popup__close, .popup__cancel' );
    this.wrap = obj.find($('.popup__wrap'));
    this.contents = obj.find($('.popup__content'));
    this.window = $( window );
    this.scrollConteiner = $( 'html' );
    this.timer = setTimeout( function(){},1 );

    this.init();
};
Popup.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function (){
        var self = this;

        return {
            build: function (){
                self.core.controls();
            },
            centerWrap: function(){
                if ( self.window.height() - 80 - self.wrap.height() > 0 ) {
                    self.wrap.css({top: ( ( self.window.height() -80 )- self.wrap.height())/2});
                } else {
                    self.wrap.css({top: 0});
                }
            },
            controls: function(){
                self.window.on( {
                    resize: function(){
                        self.core.centerWrap();
                    }
                } );
                $('body').on( 'click','.popup__open', function(){
                    var curItem = $( this),
                        parentDropdown = curItem.parents(".dropdown"),
                        linkDropdown = parentDropdown.find("a[data-toggle=dropdown]");
                    parentDropdown.removeClass("open");
                    linkDropdown.attr("aria-expanded", "false");
                    self.core.show( curItem.attr( 'data-popup' ) );
                    popup.btnClose = self.popup.find(".popup__close");
                    return false;
                } );
                self.wrap.on( {
                    click: function( event ){
                        event = event || window.event;

                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                } );
                self.popup.on( {
                    click: function(){
                        self.core.hide();
                        return false;
                    }
                } );
                self.btnClose.on( {
                    click: function(){
                        self.core.hide();
                        return false;
                    }
                } );
            },
            hide: function(){
                self.popup.css ({
                    'overflow-y': "hidden"
                });
                self.scrollConteiner.css( {
                    paddingRight: 0
                } );
                self.popup.removeClass('popup_opened');
                self.popup.addClass('popup_hide');
                location.hash = '';
                setTimeout( function(){
                    self.popup.removeClass('popup_hide');
                }, 300 );

            },
            getScrollWidth: function (){
                var scrollDiv = document.createElement("div");
                scrollDiv.className = "popup__scrollbar-measure";
                document.body.appendChild(scrollDiv);
                var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            },
            show: function( className ){
                self.core.setPopupContent( className );
                self.scrollConteiner.css( {
                    paddingRight: self.core.getScrollWidth()
                } );
                self.popup.addClass('popup_opened');
                self.core.centerWrap();
                $('.popup_opened').find('textarea').focus();
            },
            setPopupContent: function( className ){
                self.contents = self.popup.find('.popup__content');
                var curContent = self.contents.filter( '.popup__' + className );
                self.contents.css( { display: 'none' } );
                curContent.css( { display: 'block' } );
            }

        };
    }
};