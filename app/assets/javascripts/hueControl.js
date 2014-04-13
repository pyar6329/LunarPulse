/**
 * Created by ryohei on 2014/04/07.
 */

var url;
var hueIP = '192.168.11.6';
var hueUser = 'LunarPulse';
//var lightIds = {"14": 1, "15": 2, "16": 3};

var hueRequest = new XMLHttpRequest();
hueRequest.onload = function() {
    console.log(JSON.parse(this.responseText));
};
hueRequest.onerror = function(e) {
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
    hueRequest.open('GET', 'http://'+ hueIP + '/api/' + hueUser + '/lights', false);
    hueRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    hueRequest.send(null);

    if (hueRequest.status === 200) {
        console.log(hueRequest.responseText);
    }
}

// Change hue colors according to amplitude
function setAmplitudeColor(site, amp, event)
{
    var id = site;//lightIds[site]; // Light id
    var hue;
    var sat;

    //Set hue according to the event
    if (event == 1) { //'deep_moonquake') {
        hue = 46920;
    } else if (event == 2) { //'shallow_moonquake') {
        hue = 30000;
    } else if (event == 3) { //'meteoroid_impact') {
        hue = 0;
    }

    //Set saturation according to the amplitude
    var maxAmp = 500;
    sat = Math.floor(255 * amp / maxAmp);
    if(sat > 255) {
        sat = 255;
    }
    console.log(amp);
    console.log(sat);

    hueRequest.open('PUT', 'http://'+ hueIP + '/api/' + hueUser + '/lights/' + id + '/state');
    hueRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    hueRequest.send(JSON.stringify({'hue': hue, 'sat': sat, 'transitiontime': 1}));
}

// Moon age: 0 ~ 29.5
// Assume full moon age: 14.8
function setMoonAge(age)
{
    hueRequest.open('PUT', 'http://'+ hueIP + '/api/' + hueUser + '/groups/0/action');
    hueRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    var brightness = Math.floor(-255*(Math.abs(age-14.8)-14.8)/14.8);
    hueRequest.send(JSON.stringify({"bri": brightness, 'transitiontime': 1}));
}

function allLightsOff() {
    hueRequest.open('PUT', 'http://'+ hueIP + '/api/' + hueUser + '/groups/0/action');
    hueRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    hueRequest.send(JSON.stringify({'on': false}));
}

function allLightsOn() {
    hueRequest.open('PUT', 'http://'+ hueIP + '/api/' + hueUser + '/groups/0/action');
    hueRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    hueRequest.send(JSON.stringify({'on': true}));
}
