var context;
var madeSounds = null;
var audioURL = "/assets/audios/Smile_Quiet_Looking_Up.mp3";
window.addEventListener('load', init, false);
function init() {
    try {
        // audioのリロード
        context = new webkitAudioContext();
        var request = new XMLHttpRequest();
        request.open('GET', audioURL, true);
        request.responseType = 'arraybuffer';
        // Decode asynchronously
        request.onload = function() {
            context.decodeAudioData(request.response, function(buffer) {
                madeSounds = buffer;
            }, onError);
        }
        request.send();

        // 音の再生
        function playSound(buffer) {
            var source = context.createBufferSource(); // creates a sound source
            source.buffer = buffer;                    // tell the source which sound to play
            source.connect(context.destination);       // connect the source to the context's destination (the speakers)
            source.noteOn(0);                          // play the source now
        }
    }
    catch(e) {
        alert('Web Audio API is not supported in this browser');
    }
}

$(function(){
    $('#play-button').click(function(){
        var playStatus = $('#play-button').children("img").attr('src');
        if(playStatus == "/assets/play.png"){
            $('#play-button').children("img").attr('src',"/assets/stop.png");
        }
        else if(playStatus == "/assets/stop.png"){
            $('#play-button').children("img").attr('src',"/assets/play.png");
        }
    });
});
