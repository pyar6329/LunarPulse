var hostURL = "http://lunarpulse.herokuapp.com";
var startDate = "1976-01-01";
var endDate = "/1976-02-02";

$(function(){
//    var seisId = $(this).attr('id');
    var seisId = "1";
    var URL = "/moon_quake_api/duration/" + startDate + "/" + endDate + "/site/"+ seisId;
    console.log(URL);
    var Data = $.get(URL, function(data){
        for(i=0; i<data.length; i++){
            console.log(data[i].moon_quake_id);
        }
//        console.log(data[0].id);
    });
//    console.log(Data);
});
