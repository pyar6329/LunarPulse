/**
 * Created by ryohei on 2014/04/12.
 */

$(document).ready( function() {

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
        allLightsOff();
    };

    document.getElementById('allon').onclick = function (e) {
        allLightsOn();
    };

    document.getElementById('get_lights').onclick = function (e) {
        getHueLights();
    };
});