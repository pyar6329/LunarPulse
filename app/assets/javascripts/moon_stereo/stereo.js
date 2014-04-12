var audioURL = "https://dl.dropboxusercontent.com/u/16268979/rails/Smile_Quiet_Looking_Up.mp3";

// Web Audio の初期化
var audioBuffer = null;
var context = new webkitAudioContext();

// 音を読み込む
function loadDogSound(url, variableToBufferSound) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
        context.decodeAudioData(request.response, function(buffer) {
            variableToBufferSoundIn = buffer;
        }, onError);
    }
    request.send();
}

// 音の再生をする
function playSound(buffer) {

    // creates a sound source
    var source = context.createBufferSource();

    // tell the source which sound to play
    source.buffer = buffer;

    // connect the source to the context's destination (the speakers)
    source.connect(context.destination);

    // play the source now
    source.noteOn(0);
}


// ボタン押したときの操作
$(function(){
    // Create an AudioContextの作成
    var context = initializeNewWebAudioContext();

    // 音を読み込む
    context.loadSound(audioURL, 'Smile_Quiet_Looking_Up');

    // 初回時は再生する
//    context.playSound('Smile_Quiet_Looking_Up');

    $('#play-button').click(function(){
        var playStatus = $('#play-button').children("img").attr('src');
        if(playStatus == "/assets/play.png"){
            $('#play-button').children("img").attr('src',"/assets/stop.png");
        }
        else if(playStatus == "/assets/stop.png"){
            $('#play-button').children("img").attr('src',"/assets/play.png");
            context.playSound('Smile_Quiet_Looking_Up');
        }
    });
});
