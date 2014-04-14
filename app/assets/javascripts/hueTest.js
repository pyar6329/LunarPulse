/**
 * Created by ryohei on 2014/04/12.
 */

var timeCounter;
window.onload = function() {

    document.getElementById('set_moon_age').onclick = function (e) {
        setMoonAge(parseFloat(document.getElementById('moon_age').value));
    };

    document.getElementById('calc_moon_age').onclick = function (e) {
        var year = parseInt(document.getElementById('year').value);
        var month = parseInt(document.getElementById('month').value);
        var day = parseInt(document.getElementById('day').value);
        var hour = parseInt(document.getElementById('hour').value);
        var minute = parseInt(document.getElementById('minute').value);
        var moonAge = calcMoonAge(year, month, day, hour, minute);
        setMoonAge(moonAge);
        document.getElementById('moon_age').value = moonAge;
    };

    document.getElementById('set_event').onclick = function (e) {
        var site = document.getElementById('site').value;
        var amp = parseInt(document.getElementById('amp').value);
        var event = document.getElementById('event').value;

        setAmplitudeColor(site, amp, event);
    };

    document.getElementById('alloff').onclick = function (e) {
//        alert('test');
        allLightsOff();
    };

    document.getElementById('allon').onclick = function (e) {
        allLightsOn();
    };

    document.getElementById('get_lights').onclick = function (e) {
        getHueLights();
    };

    var hueRequest = new XMLHttpRequest();
    hueRequest.onload = function() {
        console.log(JSON.parse(this.responseText));
    };
    hueRequest.onerror = function(e) {
        console.log(e);
    };
    hueRequest.open('GET', 'http://'+ location.host + '/moon_quake_api/duration/' + '1976-01-01/1976-01-10/site/1' , false);
    hueRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    hueRequest.send(null);
    var data;
    if (hueRequest.status === 200) {
        data = JSON.parse(hueRequest.response);
    }

    console.log(data);


    var arr = [];
    timeCounter = new Date('1976-01-01');


     delayRender(data, 'hoge', 500);


};

var callbacks = {};
callbacks.hoge = function(amp, next_amp) {
    if (!next_amp) return;
//    var categories = ['.apollo14', '.apollo15', '.apollo16'];
//    var colors = ['#300', '#030', '#003'];
//    var size = parseAmplitude(amp.amplitude);
    console.log(amp);
    setAmplitudeColor(amp.seismometer_id, amp.amplitude, amp.quake_category_id);
//    var time= new Date(amp);
//    setMoonAge(calcMoonAge(time.getFullYear(), time.getMonth()+1, time.getDate(), time.getHours(), time.getMinutes()));
//        $(categories[amp.seismometer_id]).animate({
//            'width': size + 'px',
//            'height': size + 'px',
//            'border-radius': size + 'px'
//        });
//        $(categories[amp.seismometer_id])
//            .css('background', colors[amp.quake_category_id]);
};

//    function parseAmplitude(amplitude) {
//        var min = 25;
//        var max = 50;
//        if (!amplitude || amplitude < min) return min;
//        return amplitude * 0.1 < min ? min * 1.2 : amplitude * 0.1 > max ? max * 1.1 : amplitude * 0.1;
//    }

function delayRender(data, callbackName, msec) {
    if (!data) return false;
    function f() {
        console.log("aaaaa");
        if (!data.length) return;
        var param = data[0];

        var time = new Date(param.time);
        if(time.getTime() >= timeCounter.getTime()) {
            data.shift();
            callbacks[callbackName](param, data[0]);
            f();
        } else {
            timeCounter.setTime(timeCounter.getTime() + 60000);
            setTimeout(function () {f();}, msec);
        }
    }
    f();
}