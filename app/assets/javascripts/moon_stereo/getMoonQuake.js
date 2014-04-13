var hostURL = "http://lunarpulse.herokuapp.com";
var startDate = "1976-01-01";
var endDate = "1976-02-02";

$(function(){
//    var seisId = $(this).attr('id');
    var seisId = "1";
    var URL = "/moon_quake_api/duration/" + startDate + "/" + endDate + "/site/"+ seisId;
    console.log(URL);
    var Data = $.get(URL, function(data){
        for(i=0; i<data.length - 1; i++){
            var listenTime = data[i+1].time - data[i].time; // 取得した月震の間処理する

            var timeParts = data[i].time.split('T');
            timeParts = timeParts[0].split('-');
            setMoonAge(calcMoonAge(timeParts[0], timeParts[1], timeParts[2]));
        }
//        console.log(data[0].id);
    });
//    console.log(Data);
});
