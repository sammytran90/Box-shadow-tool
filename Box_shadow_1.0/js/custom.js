$(document).ready(function () {
    for (var i = 0; i < $('.color-button').length; i++) {
        var obj = $('.color-button');
        obj[i].style.backgroundColor = $(obj[i]).next('input').val();
    };
    $('#color-custom-1').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).slideDown();
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).slideUp();
            return false;
        },
        onSubmit: function (hsb, hex, rgb) {
            $('#color-custom-1').css('background-color', '#' + hex);
            $('#color-custom-1').next('input').val('#' + hex);
            Shadow_box.color = rgb;
            $('.expression').css('--bs-color', 'rgba(' + Shadow_box.color.r + ',' + Shadow_box.color.g + ',' + Shadow_box.color.b + ',' + Shadow_box.opacity + ')');
            $('.contents span.color').html('rgba(' + Shadow_box.color.r + ',' + Shadow_box.color.g + ',' + Shadow_box.color.b + ',' + Shadow_box.opacity + ')');
        }
    });
    $('#color-custom-2').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).slideDown();
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).slideUp();
            return false;
        },
        onSubmit: function (hsb, hex, rgb) {
            $('#color-custom-2').css('background-color', '#' + hex);
            $('#color-custom-2').next('input').val('#' + hex);
            $('.border-container').css('background-color', '#' + hex);
        }
    });
    $('#color-custom-3').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).slideDown();
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).slideUp();
            return false;
        },
        onSubmit: function (hsb, hex, rgb) {
            $('#color-custom-3').css('background-color', '#' + hex);
            $('#color-custom-3').next('input').val('#' + hex);
            $('.expression').css('background-color', '#' + hex);
        }
    });
    input_change($('div#input-range-1 input')[0], $('div#input-range-1 input')[1]);
    input_change($('div#input-range-2 input')[0], $('div#input-range-2 input')[1]);
    input_change($('div#input-range-3 input')[0], $('div#input-range-3 input')[1]);
    input_change($('div#input-range-4 input')[0], $('div#input-range-4 input')[1]);
    input_change($('div#input-range-5 input')[0], $('div#input-range-5 input')[1]);
    $('.left input[type=number]').focusout(input_number_change);
    $('.left input[type=range]').on('input', input_range_change);

    $('.left input[name=switch]').on('input', function () {
        if ($(this).val() == 1) {
            $('.expression').css({
                '--bs-inset': 'inset',
            });
        } else {
            $('.expression').css({
                '--bs-inset': '',
            });
        };
    });
    change_color('div.colorpicker_current_color');
    change_color('div.colorpicker_new_color');
});
function input_change(ipt1, ipt2) {
    $(ipt1).on('input', function () {
        $(ipt2).val(this.value);
    });
    $(ipt2).on('input', function () {
        $(ipt1).val(this.value);
    });
};
var Shadow_box = {
    width: 10,
    height: 10,
    blur: 5,
    spread: 0,
    opacity: 0.75,
    color: { r: 0, g: 0, b: 0 },
};
function change_color(obj) {
    $(obj).on('click', function () {
        var current_color = this.parentElement.id;
        var color_sector = $(obj);
        if (current_color == color_sector[0].parentElement.id) {
            $('.expression').css('--bs-color', 'rgba(' + this.style.backgroundColor.substring(4, this.style.backgroundColor.length - 1) + ',' + Shadow_box.opacity + ')');
        } else if (current_color == color_sector[1].parentElement.id) {
            $('.border-container').css('background-color', this.style.backgroundColor);
        } else if (current_color == color_sector[2].parentElement.id) {
            $('.expression').css('background-color', this.style.backgroundColor);
        };
    });
};
function input_number_change() {
    if ($(this).attr('name') == "width") {
        if (Math.abs($(this).val()) > 50) {
            var correct_value = $(this).val() / Math.abs($(this).val()) * 50;
            $(this).val(correct_value);
        };
        Shadow_box.width = $(this).val();
        $('.contents span.width').html(Shadow_box.width + 'px');
    } else if ($(this).attr('name') == "Length") {
        if (Math.abs($(this).val()) > 50) {
            var correct_value = $(this).val() / Math.abs($(this).val()) * 50;
            $(this).val(correct_value);
        };
        Shadow_box.height = $(this).val();
        $('.contents span.height').html(Shadow_box.height + 'px');
    } else if ($(this).attr('name') == "Blur") {
        if ($(this).val() > 20) {
            $(this).val(20);
        } else if ($(this).val() < 0) {
            $(this).val(0);
        };
        Shadow_box.blur = $(this).val();
        $('.contents span.blur').html(Shadow_box.blur + 'px');
    } else if ($(this).attr('name') == "Spread") {
        if (Math.abs($(this).val()) > 30) {
            var correct_value = $(this).val() / Math.abs($(this).val()) * 30;
            $(this).val(correct_value);
        };
        Shadow_box.spread = $(this).val();
        $('.contents span.spread').html(Shadow_box.spread + 'px');
    } else if ($(this).attr('name') == "Opacity") {
        if ($(this).val() > 1) {
            $(this).val(1);
        } else if ($(this).val() < 0) {
            $(this).val(0);
        };
        Shadow_box.opacity = $(this).val();
        $('.contents span.color').html('rgba(' + Shadow_box.color.r + ',' + Shadow_box.color.g + ',' + Shadow_box.color.b + ',' + Shadow_box.opacity + ')');
    };
    $('.expression').css({
        '--bs-width': Shadow_box.width + "px",
        '--bs-height': Shadow_box.height + "px",
        '--bs-blur': Shadow_box.blur + "px",
        '--bs-spread': Shadow_box.spread + "px",
        '--bs-color': 'rgba(' + Shadow_box.color.r + ',' + Shadow_box.color.g + ',' + Shadow_box.color.b + ',' + Shadow_box.opacity + ')',
    });
};
function input_range_change() {
    if ($(this).attr('name') == "width") {
        Shadow_box.width = $(this).val();
        $('.contents span.width').html(Shadow_box.width + 'px');
    } else if ($(this).attr('name') == "Length") {
        Shadow_box.height = $(this).val();
        $('.contents span.height').html(Shadow_box.height + 'px');
    } else if ($(this).attr('name') == "Blur") {
        Shadow_box.blur = $(this).val();
        $('.contents span.blur').html(Shadow_box.blur + 'px');
    } else if ($(this).attr('name') == "Spread") {
        Shadow_box.spread = $(this).val();
        $('.contents span.spread').html(Shadow_box.spread + 'px');
    } else if ($(this).attr('name') == "Opacity") {
        Shadow_box.opacity = $(this).val();
        $('.contents span.color').html('rgba(' + Shadow_box.color.r + ',' + Shadow_box.color.g + ',' + Shadow_box.color.b + ',' + Shadow_box.opacity + ')');
    }
    $('.expression').css({
        '--bs-width': Shadow_box.width + "px",
        '--bs-height': Shadow_box.height + "px",
        '--bs-blur': Shadow_box.blur + "px",
        '--bs-spread': Shadow_box.spread + "px",
        '--bs-color': 'rgba(' + Shadow_box.color.r + ',' + Shadow_box.color.g + ',' + Shadow_box.color.b + ',' + Shadow_box.opacity + ')',
    });
}