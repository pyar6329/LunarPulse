var hostURL = "http://lunarpulse.herokuapp.com";
var startDate = "1976-01-01";
var endDate = "1976-02-02";

$(function(){
//    var seisId = $(this).attr('id');
    var seisId = "1";
    var URL = "/moon_quake_api/duration/" + startDate + "/" + endDate + "/site/"+ seisId;
    var Data = $.getJSON(URL, function(data){
        for(i=0; i<data.length - 1; i++){
            var d = (data[i]);
            var timeParts = d['time'].split('T');
            timeParts = timeParts[0].split('-');
            setMoonAge(calcMoonAge(Number(timeParts[0]), Number(timeParts[1]), Number(timeParts[2])));
            setAmplitudeColor(seisId, Number(d['amplitude']), d['moon_category_id']);
        }
//        console.log(data[0].id);
    });
//    console.log(Data);
});
