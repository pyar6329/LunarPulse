/**
 * Created by ryohei on 2014/04/13.
 */

var timeCounter;

$(document).ready(function() {
    var arr = [];
    var startTime = $('#start_time').length ? $('#start_time').val() :null;
    timeCounter = new Date(startTime);
    var endTime = $('#end_time').length ? $('#end_time').val() :null;
    var url = '/moon_quake_api/duration/' + startTime + '/' + endTime;
    $.get(url, function(amps) {
        delayRender(amps, 'hoge', 100);
    },'JSON');
});

var callbacks = {};
callbacks.hoge = function(amp, next_amp) {
    if (!next_amp) return;
    var categories = ['.apollo14', '.apollo15', '.apollo16'];
    var colors = ['#300', '#030', '#003'];
    var size = parseAmplitude(amp.amplitude);
    $(categories[amp.seismometer_id]).animate({
        'width': size + 'px',
        'height': size + 'px',
        'border-radius': size + 'px'
    });
    $(categories[amp.seismometer_id])
        .css('background', colors[amp.quake_category_id]);
};

function parseAmplitude(amplitude) {
    var min = 25;
    var max = 50;
    if (!amplitude || amplitude < min) return min;
    return amplitude * 0.1 < min ? min * 1.2 : amplitude * 0.1 > max ? max * 1.1 : amplitude * 0.1;
}

function delayRender(data, callbackName, msec) {
    if (!data) return false;
    function f() {
        if (!data.length) return;
        var param = data[0];

        var time = new Date(param.time);

        if(time.getTime() <= timeCounter.getTime()) {
            data.shift();
            callbacks[callbackName](param, data[0]);
            f();
        } else {
            document.getElementById('time').innerHTML = timeCounter.toString();
            timeCounter.setTime(timeCounter.getTime() + 300000);
            setTimeout(function () {f();}, msec);
        }
    }
    f();
}
