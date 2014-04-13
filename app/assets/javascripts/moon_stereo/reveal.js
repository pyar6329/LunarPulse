////
//////Reveal.initialize({
//////    transition: 'linear'
//////});
////
////$(function(){
////var motionFlag = true;
////    var speed1 = 0;
////    var count = 0;
////Leap.loop({enableGestures: true}, function(frame){
////    $(frame.gestures).each(function(){
////        //console.log(this.type);
////        //console.log(this.direction);
//////        if (motionFlag === false) return;
////
////        switch(this.type) {
////            case "swipe":
////                //Reveal.up();
//////                console.log(this.type);
//////                console.log(this.direction[0]);
////                // console.log(this);
////                // 左方向のスワイプ
////                if(this.direction[0] < 0){
////                    // Set the FlyTo speed.
////                    ge.getOptions().setFlyToSpeed(5);
////
////                    camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
////
////                    if (camera.getLongitude() == -180) {
////                        camera.setLongitude(camera.getLongitude() + 360);
////                        isLeftReset = true;
////                    }
////                    camera.setTilt(30);
////                    camera.setLongitude(camera.getLongitude() - 5);
////
////                    /*
////                    count++;
////                    speed1 = this.speed;
////                    if(count == 10) {
////                        speed1 /= count;
////                        console.log(speed1);
////
////                        speed1 = 0;
////                        count = 0;
////                    }
////                    */
////
////                    console.log(camera.getLongitude());
////                    ge.getView().setAbstractView(camera);
////                }
////                // 右方向のスワイプ
////                else{
////                    ge.getOptions().setFlyToSpeed(5);
////
////                    camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
////
////                    if (camera.getLongitude() == 180) {
////                        camera.setLongitude(camera.getLongitude() - 360);
////                        isLeftReset = true;
////                    }
////                    camera.setTilt(30);
////                    camera.setLongitude(camera.getLongitude() + 5)
////
////                    //console.log(camera.getLongitude());
////                    ge.getView().setAbstractView(camera);
////                }
////                break;
////            case "down":
////                //Reveal.down();
////                console.log(event.type);
////                break;
////            case "left":
////                //Reveal.left();
////                console.log(event.type);
////                break;
////            case "right":
////                //Reveal.right();
////                console.log(event.type);
////                break;
////        }
////        motionFlag = false;
////        setTimeout(function(){
////            motionFlag = true;
////        }, 1300);
////    });
//////    $(frame.gestures).leapSwipeHelper(function(event){
//////
//////        if (motionFlag === false) return;
//////        switch(event.type) {
//////            case "up":
//////                Reveal.up();
//////                break;
//////            case "down":
//////                Reveal.down();
//////                break;
//////            case "left":
//////                Reveal.left();
//////                break;
//////            case "right":
//////                Reveal.right();
//////                break;
//////        }
//////        motionFlag = false;
//////        setTimeout(function(){
//////            motionFlag = true;
//////        }, 1300);
//////
//////    });
////});
////});
////// 通信をさせる技術：websocket (サーバ)
////// 機械の名前：leap motion
////// 呼び出す： jQuery , javascript(公式)
//
//
//
//
//
//
//$(function(){
//    var motionFlag = true;
//    var speed1 = 0;
//    var count = 0;
//
//    var position_x = 0.0;
//
//    Leap.loop({enableGestures: true}, function(frame){
//        $(frame.gestures).each(function(){
////            if(this.type == "swipe"){
////                if(this.direction[0] < 0){
//            if( Math.abs(position_x - this.position[0]) > 1.0){
//                ge.getOptions().setFlyToSpeed(5);
//
//                camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
//
//                if (camera.getLongitude() == -180) {
//                    camera.setLongitude(camera.getLongitude() + 360);
//                    isLeftReset = true;
//                }
//                camera.setTilt(30);
//                camera.setLongitude(camera.getLongitude() - 5)
//
//                //console.log(camera.getLongitude());
//                ge.getView().setAbstractView(camera);
//
//                position_x = this.position[0];
//            }
//            // 右方向のスワイプ
//            else{
//                if( Math.abs(position_x - this.position[0]) > 1.0){
//                    ge.getOptions().setFlyToSpeed(5);
//
//                    camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
//
//                    if (camera.getLongitude() == 180) {
//                        camera.setLongitude(camera.getLongitude() - 360);
//                        isLeftReset = true;
//                    }
//                    camera.setTilt(30);
//                    camera.setLongitude(camera.getLongitude() + 5)
//
//                    //console.log(camera.getLongitude());
//                    ge.getView().setAbstractView(camera);
//
//                    position_x = this.position[0];
//                }
//            }
////                }
//            console.log(Math.abs(position_x - this.position[0]));
//
//            motionFlag = false;
//            setTimeout(function(){
//                motionFlag = true;
//            }, 1300);
////            }
//        });
//    });
//});
//// 通信をさせる技術：websocket (サーバ)
//// 機械の名前：leap motion
//// 呼び出す： jQuery , javascript(公式)
//


var position_x = 0.0;

$(function() {
    var motionFlag = true;
    //  var speed1 = 0;
    //  var count = 0;
    Leap.loop({enableGestures: true}, function (frame) {
        if(!frame.fingers[0]) return;
        ge.getOptions().setFlyToSpeed(5);

        camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);

        if (camera.getLongitude() == -180) {
            camera.setLongitude(camera.getLongitude() + 360);
            isLeftReset = true;
        }
        if (camera.getLongitude() == 180) {
            camera.setLongitude(camera.getLongitude() - 360);
            isLeftReset = true;
        }
        camera.setTilt(30);
        camera.setLongitude(camera.getLongitude() - (position_x - frame.fingers[0].tipPosition[0]));

        ge.getView().setAbstractView(camera);

        position_x = frame.fingers[0].tipPosition[0];
    });
});
