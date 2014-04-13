var audioURL = "https://dl.dropboxusercontent.com/u/16268979/rails/test.mp3";
var audioName = "test";

//----------start Initializing an Audio Context-----------------------------
var contextClass = (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext);
if (contextClass) {
    // Web Audio API is available.
    var context = new contextClass();
} else {
    // Web Audio API is not available. Ask the user to use a supported browser.
}
// ---------until Initializing an Audio Context--------------------------

// Create the source.
var source = context.createBufferSource();
// Create the gain node.
var gain = context.createGain();
// Connect source to filter, filter to destination.
source.connect(gain);
gain.connect(context.destination);

// ---------start Loading and Playing Sounds-----------------------------
var request = new XMLHttpRequest();
request.open('GET', audioURL, true);
request.responseType = 'arraybuffer';

// Decode asynchronously
request.onload = function() {
    context.decodeAudioData(request.response, function(theBuffer) {
        buffer = theBuffer;
    }, onError);
};
request.send();

// ---------end Loading and Playing Sounds-----------------------------


function playSound(buffer) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
}


// Web Audio の初期化
//var audioBuffer = null;
//var context = new webkitAudioContext();

// creates a sound source
//var source;
//var startOffset = 0;
//var startTime = 0;

// 音を読み込む
//function loadDogSound(url, variableToBufferSound) {
//    var request = new XMLHttpRequest();
//    request.open('GET', url, true);
//    request.responseType = 'arraybuffer';
//
//    Decode asynchronously
//    request.onload = function() {
//        context.decodeAudioData(request.response, function(buffer) {
//            variableToBufferSoundIn = buffer;
//        }, onError);
//    }
//    request.send();
//}

// 音の再生をする
//function playSound(buffer) {

    // connect the source to the context's destination (the speakers)
//    source.connect(context.destination);
//    context.listener.setPosition(100, -50, 50);


//    source= context.createBufferSource();

    // tell the source which sound to play
//    source.buffer = buffer;

    // connect the source to the context's destination (the speakers)
//    source.connect(context.destination);
//    context.listener.setPosition(20, -5, 0);

    // play the source now
//    source.noteOn(0);
//}

// 音を停止する
//function pause() {
//    source.stop();
    // Measure how much time passed since the last pause.
//    startOffset += context.currentTime - startTime;
//}

// ボタン押したときの操作
$(function(){
    // Create an AudioContextの作成
//    var context = initializeNewWebAudioContext();

    // 音を読み込む
//    context.loadSound(audioURL, audioName);

    // 初回時は再生する
//    context.playSound(audioName);

    $('#play-button').click(function(){
        var playStatus = $('#play-button').children("img").attr('src');
        if(playStatus == "/assets/play.png"){
            $('#play-button').children("img").attr('src',"/assets/stop.png");
//            context.playSound(audioName);
        }
        else if(playStatus == "/assets/stop.png"){
            $('#play-button').children("img").attr('src',"/assets/play.png");
//            context.pause();
            playSound("test");
        }
    });
});
