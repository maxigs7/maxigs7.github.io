require('../css/bootstrap.reboot.css');
require('../css/main.css');
require('./page.css');

$(function() {
    $('#burger').on('click', function(e) {
        var target = $(this).data('target');
        $(target).toggleClass('collapse');
    });
});
