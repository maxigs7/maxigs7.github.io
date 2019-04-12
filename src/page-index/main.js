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
        var dateFrom = moment(from, 'MM/DD/YYYY');
        var dateTo;
        var time;
        if (!to) {
            dateTo = moment();
        } else {
            dateTo = moment(to, 'MM/DD/YYYY');
        }
        $this.text('(' + getTime(dateFrom, dateTo) + ')');
    });

    function getDiff(dateFrom, dateTo) {
        var year = dateTo.diff(dateFrom, 'year');
        var month = dateTo.diff(dateFrom, 'month') - year * 12;
        return {
            year: year,
            month: month
        };
    }

    function getTime(dateFrom, dateTo) {
        var diff = getDiff(dateFrom, dateTo);
        var text = '';
        if (diff.year == 1) text += 'YEAR ' + diff.year;
        else if (diff.year > 1) text += 'YEARS ' + diff.year;

        if (diff.month == 1) text += ' MONTH ' + diff.month;
        else if (diff.month > 1) text += ' MONTHS ' + diff.month;

        return text;
    }
});
