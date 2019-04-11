require('../css/bootstrap.reboot.css');
require('../css/main.css');
require('./page.css');

$(function() {
    $('#burger').on('click', function(e) {
        var target = $(this).data('target');
        $(target).toggleClass('collapse');
    });

    $('[data-ago-from]').each(function(i, el) {
        var $this = $(this);
        var from = $this.data('ago-from');
        var to = $this.data('ago-to');
        var time;
        if (to) {
            time = moment(from, 'MM/DD/YYYY').from(
                moment(to, 'MM/DD/YYYY'),
                true
            );
        } else {
            time = moment(from, 'MM/DD/YYYY').fromNow(true);
        }
        $this.text('(' + time + ')');
    });
});
