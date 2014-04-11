/**
 * Created by ryohei on 2014/04/07.
 */

var url;
var ip = '192.168.0.2';
var user = 'LunarPulse';

var request = new XMLHttpRequest();

window.onload = function()
{
    document.getElementById('set_moon_age').onclick = function(e){
        setMoonAge(parseFloat(document.getElementById('moon_age').value));
    };

    document.getElementById('calc_moon_age').onclick = function(e)
    {
        var year = parseInt(document.getElementById('year').value);
        var month = parseInt(document.getElementById('month').value);
        var day = parseInt(document.getElementById('day').value);
        var hour = parseInt(document.getElementById('hour').value);
        var minute = parseInt(document.getElementById('minute').value);
        var moonAge = calcMoonAge(year, month, day, hour, minute);
        setMoonAge(moonAge);
        document.getElementById('moon_age').value = moonAge;
    }

    document.getElementById('alloff').onclick = function(e) {
        allLightsOff();
    };

    document.getElementById('allon').onclick = function(e) {
        allLightsOn();
    };

    request.onload = function() {
        console.log(JSON.parse(this.responseText));
    };

    request.onerror = function(e) {
        console.log(e);
    };
};


function calcMoonAge(year, month, day, hour, minute)
{
    var a = ((year - 11) % 19) * 11;
    var bList = [0, 2, 0, 2, 2, 4, 5, 6, 7, 8, 9, 10];

    var adj = (hour + (minute / 60.0) ) / 24.0;

    var moonAge = (a + bList[month-1] + day) % 30 - 0.5 + adj;
    if(moonAge < 0) {
        moonAge += 29.5;
    } else if (moonAge > 29.5) {
        moonAge -= 29.5;
    }

    return moonAge;
}

// Moon age: 0 ~ 29.5
// Assume full moon age: 14.8
function setMoonAge(age)
{
    request.open('PUT', 'http://'+ ip + '/api/' + user + '/groups/0/action');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var brightness = Math.floor(-255*(Math.abs(age-14.8)-14.8)/14.8);
    request.send(JSON.stringify({"bri": brightness}));
}

function allLightsOff() {
    request.open('PUT', 'http://'+ ip + '/api/' + user + '/groups/0/action');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify({'on': false}));
}

function allLightsOn() {
    request.open('PUT', 'http://'+ ip + '/api/' + user + '/groups/0/action');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify({'on': true}));
}