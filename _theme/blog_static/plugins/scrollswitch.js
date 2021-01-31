;(function($){
"use strict";

var EchoScrollSwich = window.EchoScrollSwich || {};

EchoScrollSwich = (function() {

    function EchoScrollSwich(element, options) {
        var
            t = this,
            e = element;

        t.initials = {
            et: 0
        };
        t.settings = $.extend({}, t.initials, options);

        t.init(element);
        t.run(element);

        window.onscroll = function() {
            t.run(element);
        };
        return false;

    }

    return EchoScrollSwich;

}());

EchoScrollSwich.prototype.init = function(element) {
    var
        t = this,
        st;

    st = $(window).scrollTop();

    t.et = $(element).offset().top;

    // リロードの場合はactiveクラスも付与する
    if (st > 0) {
        $(element).addClass('js-scrollswitch-active');
    }
    return false;
};

EchoScrollSwich.prototype.run = function(element) {
    var
        t = this,
        st;

    st = $(window).scrollTop();

    if (st > t.et) {
        $(element).addClass('js-scrollswitch-active');
    } else {
        $(element).removeClass('js-scrollswitch-active');
    }

    return false;
};

$.fn.EchoScrollSwich = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].EchoScrollSwich = new EchoScrollSwich(element[i], options);
        }
    }
    return element;

};

$(function(){

    $('.js-scrollswitch').EchoScrollSwich();

});

})(jQuery);


