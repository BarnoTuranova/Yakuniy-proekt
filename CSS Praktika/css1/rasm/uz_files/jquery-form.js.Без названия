/**
 * jquery.form-input plugin v1.0.0
 * https://github.com/kbychkov/jquery.form-input
 */
(function ($) {

    $.fn.formInput = function (options) {

        var settings = $.extend({
            activeClass: 'active',
            focusClass: 'focus'
        }, options);

        return this.each(function () {

            var $parent = $(this),
                $control = $('input', $parent);

            function activateControl($control) {
                var value = $control.val();
                if (value == null || value == '') {
                    $parent.removeClass(settings.activeClass);
                } else {
                    $parent.addClass(settings.activeClass);
                }
            }

            activateControl($control);

            $control.on('focus', function () {
                $parent.addClass(settings.focusClass);
            });

            $control.on('blur', function () {
                $parent.removeClass(settings.focusClass);
                activateControl($control);
            });
        });
    }
}(jQuery));
