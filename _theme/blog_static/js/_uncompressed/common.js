(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        new ScrollHint('.js-scrollable');

        var be = document.querySelector('.echo-mt-be');
        var el = be.querySelectorAll('.mt-be-columns');
        if(el.length > 0) {
            el.forEach(function(columns) {
                var column = columns.querySelectorAll('.mt-be-column');
                if(column.length > 0) {
                    columns.classList.add('echo-mt-be-columns-' + column.length);
                }
            });
        }

    });

}());
