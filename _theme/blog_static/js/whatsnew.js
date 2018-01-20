;(function($){
"use strict";
var WsWhatsNew = window.WsWhatsNew || {};

WsWhatsNew = (function() {

    function WsWhatsNew(element, options) {
        var t = this;

        t.initials = {
            target: false,
            insert: 'after',
            day: 14,
            data_publish: 'publish',
            badge: '<div class="js-whatsnew"><span class="js-whatsnew-badge">NEW</span></div>',
        };
        t.settings = $.extend({}, t.initials, options);

        t.run(element);
        return false;
    }

    return WsWhatsNew;

}());

WsWhatsNew.prototype.run = function(element) {
    var
        t = this,
        e = $(element),
        target,
        day,
        now,
        publish,
        past,
        elapsed;

    target = !t.settings.target ? e : $(t.settings.target, e);

    day = parseInt( t.settings.day , 10 );
    now = new Date();
    publish = new Date( e.data(t.settings.data_publish) );

    elapsed = now - publish;
    past = 1000 * 60 * 60 * 24 * day;


    if ( elapsed < past ) {
        if ( e.data(t.settings.insert) === 'after' ) {
            target.prepend(t.settings.badge);
        } else {
            target.append(t.settings.badge);
        }
    }

    return false;

};

$.fn.WsWhatsNew = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].WsWhatsNew = new WsWhatsNew(element[i], options);
        }
    }
    return element;

};


// activate
// -------------------------

$(function(){

    $('.js-whatsnew').WsWhatsNew({
        badge: '<div class="js-whatsnew"><span class="m-badge m-badge-first">NEW</span></div>',
    });

});
})(jQuery);
