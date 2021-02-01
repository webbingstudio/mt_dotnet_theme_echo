/*!
 * echo.hoverswitch.js v1.0.0
 * Detects mouseover / mouseout for a specific element and assigns a class attribute
 * 
 * Copyright 2021 WebbingStudio
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

;(function($){
"use strict";

var EchoHoverSwitch = window.EchoHoverSwitch || {};

EchoHoverSwitch = (function() {

    function EchoHoverSwitch(element, options) {
        var
            t = this;

        t.initials = {
            in_class: 'js-hoverswitch-in',
            out_class: 'js-hoverswitch-out'
        };
        t.settings = $.extend({}, t.initials, options);

        t.target;

        $(element).addClass( t.settings.out_class );

        $(element).on('mouseover', function() {
            $(this)
                .removeClass( t.settings.out_class )
                .addClass( t.settings.in_class );
        });
        $(element).on('mouseout', function() {
            $(this)
                .removeClass( t.settings.in_class )
                .addClass( t.settings.out_class );
        });
        return false;

    }

    return EchoHoverSwitch;

}());

$.fn.EchoHoverSwitch = function() {
    var
        element = this,
        options = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        i;
    for (i = 0; i < element.length; i++) {
        if (typeof options == 'object' || typeof options == 'undefined') {
            element[i].EchoHoverSwitch = new EchoHoverSwitch(element[i], options);
        }
    }
    return element;

};

$(function(){

    $('.js-hoverswitch').EchoHoverSwitch();

});

})(jQuery);


