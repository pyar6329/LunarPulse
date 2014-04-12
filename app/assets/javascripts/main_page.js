/**
 * Created by ryohei on 2014/04/13.
 */

window.onload = function (e) {

    var request = new XMLHttpRequest();
    request.onload = function() {
        console.log(JSON.parse(this.responseText));
    };
    request.onerror = function(e) {
        console.log(e);
    };

    request.open('GET', 'http://'+ location.host + '/moon_quake_api/start_date', false);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(null);

    if (request.status === 200) {
        var start = JSON.parse(request.responseText);
    }

    request.open('GET', 'http://'+ location.host + '/moon_quake_api/end_date', false);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(null);

    if (request.status === 200) {
        var end = JSON.parse(request.responseText);
    }

    $(function() {
        $('#date_from').datepicker({
            numberOfMonths: 2,
            dateFormat: 'yy-mm-dd',
            minDate: new Date(start['year'], start['month'] - 1, start['day']),
            maxDate: new Date(end['year'], end['month'] - 1, end['day']),
            defaultDate: new Date(start['year'], start['month'] - 1, start['day'])
        });
    });

    $(function() {
        $('#date_to').datepicker({
            numberOfMonths: 2,
            dateFormat: 'yy-mm-dd',
            minDate: new Date(start['year'], start['month'] - 1, start['day']),
            maxDate: new Date(end['year'], end['month'] - 1, end['day']),
            defaultDate: new Date(end['year'], end['month'] - 1, end['day'])
        });
    });


};