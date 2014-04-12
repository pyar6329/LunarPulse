/**
 * Created by ryohei on 2014/04/07.
 */

var url;
var ip = '192.168.11.6';
var user = 'LunarPulse';
var lightIds = {"14": 1, "15": 2, "16": 3};

var request = new XMLHttpRequest();
request.onload = function() {
    console.log(JSON.parse(this.responseText));
};
request.onerror = function(e) {
    console.log(e);
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

function getHueLights()
{
    request.open('GET', 'http://'+ ip + '/api/' + user + '/lights', false);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(null);

    if (request.status === 200) {
        console.log(request.responseText);
    }
}

// Change hue colors according to amplitude
function setAmplitudeColor(site, amp, event)
{
    var id = lightIds[site]; // Light id
    var hue;
    var sat;

    //Set hue according to the event
    if (event == 'deep_moonquake') {
        hue = 46920;
    } else if (event == 'shallow_moonquake') {
        hue = 30000;
    } else if (event == 'meteoroid_impact') {
        hue = 0;
    }

    //Set saturation according to the amplitude
    var maxAmp = 1000;
    sat = Math.floor(255 * amp / maxAmp);
    console.log(sat);

    request.open('PUT', 'http://'+ ip + '/api/' + user + '/lights/' + id + '/state');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify({'hue': hue, 'sat': sat, 'transitiontime': 1}));
}

// Moon age: 0 ~ 29.5
// Assume full moon age: 14.8
function setMoonAge(age)
{
    request.open('PUT', 'http://'+ ip + '/api/' + user + '/groups/0/action');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var brightness = Math.floor(-255*(Math.abs(age-14.8)-14.8)/14.8);
    request.send(JSON.stringify({"bri": brightness, 'transitiontime': 1}));
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